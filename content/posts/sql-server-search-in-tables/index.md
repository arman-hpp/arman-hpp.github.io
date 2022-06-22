+++
author = "آرمان حسن پور"
title = "جستجو در همه جدول‌ها در SQL Server"
date = 2020-02-09T19:58:09+03:30
featured = false
comment = false
toc = false
reward = false
pinned = false
categories = [
	"SQLServer"
]
tags = [
    "SQLServer"
]
series = []
images = []
+++


یکی از موارد پُر کاربرد در مهندسی معکوس نرم افزارهای دارای بانک اطلاعاتی جستجوی یک مقدار در کل جدولهای بانک اطلاعاتی است. 
<!--more-->
به این منظور می‌توان از کد زیر استفاده نمود: 
```sql
DECLARE @SearchStr nvarchar(100)
SET @SearchStr = '## YOUR STRING HERE ##'
 
CREATE TABLE #Results (ColumnName nvarchar(370), ColumnValue nvarchar(3630))
 
SET NOCOUNT ON
 
DECLARE @TableName nvarchar(256),
	@ColumnName nvarchar(128),
	@SearchStr2 nvarchar(110)

SET @TableName = ''

SET @SearchStr2 = QUOTENAME('%' + @SearchStr + '%','''')
 
WHILE @TableName IS NOT NULL
BEGIN
    SET @ColumnName = ''
    SET @TableName = 
    (
        SELECT MIN(QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME))
        FROM     INFORMATION_SCHEMA.TABLES
        WHERE         TABLE_TYPE = 'BASE TABLE'
            AND    QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME) > @TableName
            AND    OBJECTPROPERTY(
                    OBJECT_ID(
                        QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME)
                         ), 'IsMSShipped'
                           ) = 0
    )
 
    WHILE (@TableName IS NOT NULL) AND (@ColumnName IS NOT NULL)         
    BEGIN
        SET @ColumnName =
        (
            SELECT MIN(QUOTENAME(COLUMN_NAME))
            FROM     INFORMATION_SCHEMA.COLUMNS
            WHERE         TABLE_SCHEMA    = PARSENAME(@TableName, 2)
                AND    TABLE_NAME    = PARSENAME(@TableName, 1)
                AND    DATA_TYPE IN ('char', 'varchar', 'nchar', 'nvarchar', 'int', 'decimal')
                AND    QUOTENAME(COLUMN_NAME) > @ColumnName
        )
 
        IF @ColumnName IS NOT NULL        
        BEGIN
            INSERT INTO #Results
            EXEC
            (
                'SELECT ''' + @TableName + '.' + @ColumnName + ''', LEFT(' + @ColumnName + ', 3630) FROM ' + @TableName + ' (NOLOCK) ' +
                ' WHERE ' + @ColumnName + ' LIKE ' + @SearchStr2
            )
        END
    END   
END
 
SELECT ColumnName, ColumnValue FROM #Results
 
DROP TABLE #Results
```

همچنین می‌توان به منظور قابلیت استفاده مجدد، کد بالا را به صورت Stored Procedure نیز پیاده‌سازی نمود:

```sql
CREATE PROC SearchAllTables
(
    @SearchStr nvarchar(100)
)
AS 
BEGIN
    CREATE TABLE #Results (ColumnName nvarchar(370), ColumnValue nvarchar(3630))
 
    SET NOCOUNT ON
 
    DECLARE @TableName nvarchar(256), 
		@ColumnName nvarchar(128),
		@SearchStr2 nvarchar(110)
		
    SET @TableName = ''
    SET @SearchStr2 = QUOTENAME('%' + @SearchStr + '%','''')
 
    WHILE @TableName IS NOT NULL    
    BEGIN
        SET @ColumnName = ''
        SET @TableName = 
        (
            SELECT MIN(QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME))
            FROM     INFORMATION_SCHEMA.TABLES
            WHERE         TABLE_TYPE = 'BASE TABLE'
                AND    QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME) > @TableName
                AND    OBJECTPROPERTY(
                        OBJECT_ID(
                            QUOTENAME(TABLE_SCHEMA) + '.' + QUOTENAME(TABLE_NAME)
                             ), 'IsMSShipped'
                               ) = 0
        )
 
        WHILE (@TableName IS NOT NULL) AND (@ColumnName IS NOT NULL)             
        BEGIN
            SET @ColumnName =
            (
                SELECT MIN(QUOTENAME(COLUMN_NAME))
                FROM     INFORMATION_SCHEMA.COLUMNS
                WHERE         TABLE_SCHEMA    = PARSENAME(@TableName, 2)
                    AND    TABLE_NAME    = PARSENAME(@TableName, 1)
                    AND    DATA_TYPE IN ('char', 'varchar', 'nchar', 'nvarchar', 'int', 'decimal')
                    AND    QUOTENAME(COLUMN_NAME) > @ColumnName
            )
     
            IF @ColumnName IS NOT NULL            
            BEGIN
                INSERT INTO #Results
                EXEC
                (
                    'SELECT ''' + @TableName + '.' + @ColumnName + ''', LEFT(' + @ColumnName + ', 3630) FROM ' + @TableName + ' (NOLOCK) ' +
                    ' WHERE ' + @ColumnName + ' LIKE ' + @SearchStr2
                )
            END
        END   
    END
 
    SELECT ColumnName, ColumnValue FROM #Results
    DROP TABLE #Results
END
```