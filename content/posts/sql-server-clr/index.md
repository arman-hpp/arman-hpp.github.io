+++
author = "آرمان حسن پور"
title = "استفاده از CLR در SQL Server" 
date = 2020-02-07T18:22:06+03:30
featured = false
comment = false
toc = false
reward = false
pinned = false
categories = [
	"DotNet","CSharp","SQLServer","SQL"
]
tags = [
    "SQLServer","SQL","CLR","CSharp","DotNet","SQL CLR","CLR Integrated","CLR Embedded"
]
series = []
images = []
+++

SQL Server به منظور ارتقا در مدل برنامه‌نویسی بانک اطلاعاتی خود از نسخه 2005 تکنولوژی SQL CLR را معرفی نمود. این تکنولوژی همچنین با اسامی CLR Integrated ،CLR Enabled و CLR Embedded نیز شناخته می‌شود. هدف آن این است که شما بتوانید اشیاء بانک اطلاعاتی از قبیل روال‌های ذخیره شده (Stored Procedure) ، توابع (Function) و تریگرها (Trigger) را با استفاده از CSharp و یا  VB ایجاد کرده و آن را در SQL Server مورد استفاده قرار دهید.
<!--more-->
تکنولوژی SQL CLR با میزبانی کردن از (dotNET **C**ommon **L**anguage **R**untime) یا همان محیط زمان اجرای dotNET در SQL Server، به مدیران بانک اطلاعاتی اجازه می‌دهد تا از قابلیت‌های موجود در dotNET برای تعریف اشیاء بانک اطلاعاتی استفاده کنند. این قابلیت توسط فضاهای نام System.Data ،System.Data.Sql و Microsoft.SqlServer.Server که در اسمبلی (assembly) System.Data.dll در dotNET قرار داده شده‌اند، پشتیبانی می‌گردند. ایجاد اشیاء بانک اطلاعاتی با استفاده از امکان SQL CLR، طی مراحل زیر ممکن می‌گردند:
-	پیاده‌سازی کدها در  CSharp یا VB در dotNET و کامپایل آن
-	بارگذاری و اجرای کد کامپایل شده در مرحله قبل در SQL Server
	-	فعال سازی امکان SQL CLR در بانک اطلاعاتی
	-	ایجاد اسمبلی از کد مزبور در بانک اطلاعاتی
	-	ایجاد شی بانک اطلاعاتی از اسمبلی مرحله قبل
<br>
## پیاده‌سازی کدها در CSharp یا VB در dotNET و کامپایل آن
به عنوان مثال کد مورد نظر خود را در کلاسی با نام StoredProcedures و در تابع SP1 نوشته و آن را کامپایل می‌کنیم. کد کامپایل شده را (StoredProcedures.dll) باید در مرحله بعد در SQL Server بارگذاری کنیم. البته کد زیر یک مثال hello world بوده و تنها به منظور آشنایی با نحوه انجام کار می‌باشد. از تمامی قابلیت‌ها و کلاس‌های موجود در dotNET می‌توان در این کلاس استفاده نمود.
```csharp
using System;
using System.Data;
using Microsoft.SqlServer.Server;
using System.Data.SqlTypes;
 
public class StoredProcedures
{
    [Microsoft.SqlServer.Server.SqlProcedure]
    public static void SP1()
    {
        SqlContext.Pipe.Send("Hello world!\n");
    }
}
```
## فعال‌سازی امکان CLR  SQL در بانک اطلاعاتی
امکان CLR SQL در SQL Server به صورت پیش فرض غیرفعال است و برای فعال‌سازی آن باید کد زیر را اجرا کرد:

```sql
sp_configure 'show advanced options', 1
RECONFIGURE
GO

sp_configure 'clr enabled', 1
RECONFIGURE
GO

sp_configure 'show advanced options', 0
RECONFIGURE
GO
```

برای غیرفعال‌سازی هم کد زیر را باید اجرا نمود:

```sql
sp_configure 'show advanced options', 1
RECONFIGURE
GO

sp_configure 'clr enabled', 0
RECONFIGURE
GO

sp_configure 'show advanced options', 0
RECONFIGURE
GO
```

برای اینکه فعال یا غیرفعال بودن SQL CLR را در SQL SERVER بررسی نماییم باید کد زیر را اجرا نمود:
```sql
SELECT name
      ,CAST(value AS int) AS value_configured
      ,CAST(value_in_use AS int) AS value_in_use
FROM sys.configurations
WHERE name = 'clr enabled'
```

## ایجاد اسمبلی در بانک اطلاعاتی
گام بعدی ایجاد اسمبلی در بانک اطلاعاتی از روی کد کامپایل شده است.
```sql
CREATE ASSEMBLY QClrIntegration 
	FROM 'H:\Clr\StoredProcedures.dll' 
	WITH Permission_set = safe
GO
```
با توجه به کدی که نوشته‌ایم و برای کنترل دسترسی کد CLR به دیگر کدها از PERMISSION_SET استفاده می‌گردد:
-	ویژگی SAFE به اسمبلی‌ها اجازه می‌دهد که تنها محاسبات محلی و دسترسی به فایل‌های محلی را داشته باشد.
-	ویژگی EXTERNAL_ACCESS مشابه ویژگی قبلی با این تفاوت که اسمبلی می‌تواند به منابع شبکه دسترسی داشته باشد.
-	ویژگی UNSAFE اجازه دسترسی نامحدود به منابع و کدهای غیر از dotNet و مدیریت نشده (Unmanaged Code) را هم می‌دهد.


برای استفاده از ویژگی UNSAFE باید ویژگی اعتماد (trustworthy) را در بانک اطلاعاتی فعال نمود. این ویژگی مشخص می‌کند که بانک اطلاعاتی به کدهای بیرونی اعتماد دارد (البته توصیه نمی‌شود). در غیر این صورت با فعال‌سازی خصوصیت UNSAFE خطا اعلام می‌شود.

```sql
ALTER DATABASE DB_NAME 
	SET trustworthy ON
GO	
```

به طور کلی فعال کردن استفاده از SQL CLR سطح حملات به SQL Server را وسیع‌تر می‌کند و آن را از نظر اسمبلی‌های غیر عمدی و مخرب در معرض خطر قرار می‌دهد. با توجه به ضرورت استفاده از SQL CLR بسیاری از چک لیست‌های امنیتی فقط اسمبلی‌های ایجاد شده با دسترسی SAFE را مجاز می‌دانند و اسمبلی‌های ایجاد شده با دسترسی‌های UNSAFE و EXTERNAL_ACCESS را خطرناک می‌شمارند.

##  ایجاد شی بانک اطلاعاتی از اسمبلی مرحله قبل
حال می‌توان از اسمبلی ایجاد شده در مرحله قبل برای ایجاد روال ذخیره شده (Stored Procedure) و یا تابع (Function) مورد نظر استفاده نمود. چون در مرحله‌ی قبل ما کلاسی از نوع Stored Procedure ایجاد کردیم، در SQL Server نیز برای استفاده از آن یک روال ذخیره شده ایجاد می‌کنیم.
```sql
CREATE PROCEDURE hello
AS
EXTERNAL NAME helloworld.StoredProcedures.SP1
GO
```
با اجرای این روال ذخیره شده، کد نوشته شده در تابع sp1 اجرا می‌گردد:

```sql
EXEC hello

-- Hello world!
```

برای حذف ابتدا باید شی‌هایی که ارجاعی از اسمبلی حذف و سپس خود اسمبلی حذف گردد:
```sql
DROP PROCEDURE hello
GO

DROP ASSEMBLY helloworld
GO
```