+++
author = "آرمان حسن پور"
title = "صورت حساب در SQL" 
date = 2020-06-03T16:21:32+03:30
featured = false
comment = false
toc = false
reward = false
pinned = false
categories = [
	"Shetab"
]
tags = [
    "شتاب", "Shetab"
]
series = []
images = []
+++

برای تهیه‌ی صورت حساب بانکی (گردش حساب) در SQL روش‌های مختلفی وجود دارد که ما در این مطلب یکی از روش‌های آن را پیاده‌سازی می‌کنیم.
<!--more-->

به عنوان یک مثال جدولی از تراکنش‌ها ایجاد می‌کنیم:
``` SQL
CREATE TABLE dbo.Transactions
([Row] integer, [Type] integer, [Amount] DECIMAL(18,0))
```

سپس آن را با مقادیر زیر مقداردهی می‌کنیم:
``` SQL
INSERT INTO dbo.Transactions ([Row], [Type], [Amount])
VALUES (1, 1, 1000)

INSERT INTO dbo.Transactions ([Row], [Type], [Amount])
VALUES (2, 1, 2000)

INSERT INTO dbo.Transactions ([Row], [Type], [Amount])
VALUES (3, -1, 1000)

INSERT INTO dbo.Transactions ([Row], [Type], [Amount])
VALUES (3, 1, 3000)
```

سه متغیر به نام‌های SumCredit، SumDebit و Balance را به عنوان جمع بستانکار از قبل، جمع بدهکار از قبل و مانده از قبل تعریف می‌کنیم. در صورتی که همه تراکنش‌ها در یک جدول است و جدول دیگری برای تراکنش‌های قبلی نداریم مقدار این سه متغییر را می‌توان برابر صفر قرار داد یا آن‌ها را با صفر جایگزین نمود.

``` SQL
DECLARE @SumCredit DECIMAL(18,0);
SET @SumCredit = 8000;

DECLARE @SumDebit DECIMAL(18,0);
SET @SumDebit = 2000;

DECLARE @Balance DECIMAL(18,0);
SET @Balance = 5000;

SELECT
	[Row] AS Row,
	[Type] AS Type,
	[Amount] AS Amount,
	((SUM(([Type]*[Amount])*(-1)) OVER (ORDER BY [Row])) + @Balance) AS Balance,
	((SUM(CASE WHEN [Type] = -1 THEN [Amount] ELSE 0 END) OVER (ORDER BY [Row])) + @SumCredit) AS Credit,
	((SUM(CASE WHEN [Type] = 1 THEN [Amount] ELSE 0 END) OVER (ORDER BY [Row])) + @SumDebit) AS Debit
FROM dbo.Transactions
```