+++
author = "آرمان حسن پور"
title = "نمایش نتایج پرس‌و‌جوها به صورت یک مقدار جداشده با کاما در Oracle"
date = 2019-02-05T15:01:57+03:30
featured = false
comment = false
toc = false
reward = false
pinned = false
categories = [
	"Oracle","SQL"
]
tags = [
    "Oracle","LISTAGG","Comma Separated List","SQL"
]
series = []
images = []
+++

در برخی از سناریوها نیاز به نمایش خروجی چند مقدار به صورت یک مقدار با یک جداکننده مانند کاما داریم. در Oracle می‌توان از تابع LISTAGG برای تبدیل نتایج پرس‌و‌جو به صورت یک مقدار جداشده با کاما استفاده نمود.
<!--more-->
به طور مثال پرس‌و‌جوی زیر نام قاره‌ها را از جدول regions باز می‌گرداند.
```sql
SELECT region_name
FROM regions;
```

نتیجه:
```text
REGION_NAME
------------------------
Americas                  
Asia                      
Middle East and Africa  
```

این پرس‌و‌جو چهار سطر مختلف به عنوان نتیجه را باز می‌گرداند. اما اگر بخواهیم این چهار سطر را به صورت یک مقدار جدا شده با کاما نمایش دهیم می‌توانیم آن را به صورت زیر انجام دهیم:
```sql
SELECT LISTAGG(region_name, ', ')
FROM regions;
```

نتیجه:
```text
LISTAGG(LAST_NAME,',') 
-----------------------------------------------
Europe, Americas, Asia, Middle East and Africa      
```

تابع LISTAGG دو مقدار را به عنوان ورودی دریافت می‌نماید. مقدار اول نام ستون و مقدار دوم جدا کننده مورد نظر می‌باشد که در این مثال کاراکتر کاما است. مقدار دوم اختیاری است و اگر داده نشود بدون جدا کننده مقادیر بهم چسبانده می‌شوند.

امکان استفاده از عبارت DISTINCT در تابع LISTAGG به منظور حذف مقادیر تکراری نیز وجود دارد.

```sql
SELECT LISTAGG(DISTINCT region_id, ',') 
FROM countries
```

نتیجه:
```text
LISTAGG(DISTINCT region_id, ',') 
--------------------------------------------
1,2,3,4
```

به منظور مرتب سازی نتایج در تابع LISTAGG می‌توان از عبارت WITHIN GROUP (ORDER BY...) استفاده نمود.

```sql
SELECT LISTAGG(region_name, ',') WITHIN GROUP (ORDER BY region_name ASC) 
FROM regions;
```

نتیجه:
```text
LISTAGG(region_name, ',')
--------------------------------------------
Americas,Asia,Europe,Middle East and Africa
```

از تابع LISTAGG می توان در یک پرس‌و‌جو گروه‌بندی شده نیز استفاده نمود.
```sql
SELECT 
    region_id,
    LISTAGG(country_id, ', ') WITHIN GROUP (ORDER BY country_id ASC) AS "Countries"
FROM countries
GROUP BY region_id
ORDER BY region_id;
```
نتیجه:

```text
REGION_ID	Countries 
------------------------------------------------
1		BE, CH, DE, DK, FR, IT, NL, UK    
2		AR, BR, CA, MX, US                
3		AU, CN, HK, IN, JP, SG            
4		EG, IL, KW, NG, ZM, ZW     
```	