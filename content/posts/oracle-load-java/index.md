+++
author = "آرمان حسن پور"
title = "استفاده از زبان برنامه‌نویسی Java در بانک اطلاعاتی Oracle" 
date = 2023-01-15T09:50:51+03:30
featured = false
comment = false
toc = false
reward = false
pinned = false
categories = [
	"Oracle","Java","SQL"
]
tags = [
    "Oracle","Java","LoadJava","SQL"
]
series = []
images = []
+++

هرچند SQL بسیاری از نیازمندی‌های برنامه‌نویسان را در زمینه‌ی کار با داده‌ها برطرف می‌نماید اما در مواقعی که نیاز به پیاده‌سازی توابع پیچیده یا تبدیل انواع خاص و سفارشی بهم داریم نیاز به استفاده از یک زبان‌ برنامه‌نویسی سطح بالا وجود دارد. هرچند استفاده از زبان‌های برنامه‌نویسی دیگر در بانک‌های اطلاعاتی رابطه‌ای مرسوم نیست و حتی در برخی موارد ممکن است کارایی سیستم را کاهش دهد اما اگر در جای درستی استفاده شود مطمئنا باعث بهبود عملکرد کلی سیستم می‌شود. بدین منظور، در بانک اطلاعاتی Oracle قابلیت استفاده از زبان برنامه‌نویسی Java وجود دارد و می‌توان متدهای نوشته شده با این زبان را با SQL ادغام و اجرا نمود.
<!--more-->
به منظور استفاده از متدهای Java در Oralce چندین روش پیشنهاد می‌شود:
-	استفاده از PL/SQL Wrappers
-	پشتیبانی از JNI
-	استفاده از SQLJ و JDBC 
-	استفاده از رابط خط فرمان
-	استفاده از Stub در سمت کلاینت


در این مطلب از ساده‌ترین روش یعنی PL/SQL Wrappers برای فراخوانی متدهای Java استفاده می‌نماییم. شما می‌توانید متدهای کامپایل‌شده Java را به همان روشی که توابع و روال‌های ذخیره شده (Stored Procedure) در PL/SQL اجرا می‌شوند، اجرا کنید. در بانک اطلاعاتی Oracle، متدهای Java معمولا از طریق رابط PL/SQL فراخوانی می‌شود. 
برای فراخوانی یک متد کامپایل‌شده Java، باید آن را از طریق "مشخصات فراخوانی" (Call Specification) منتشر کنید. مثال زیر نحوه‌ی ایجاد، resolve، بارگذاری و انتشار یک متد ساده کامپایل‌شده Java را نشان می‌دهد که یک رشته را باز می‌گرداند:
<br>
1-	کلاس Hello را به شکل زیر پیاده‌سازی می‌کنیم و آن را با نام Hello.java ذخیره می‌نماییم. توجه داشته باشید که به منظور فراخوانی متدهای Java نیاز است آن‌ها را به صورت static پیاده‌سازی نمایید.
```Java
public class Hello
{
  public static String world()
  {
    return "Hello world";
  }
}
```
2-	سپس کلاس مورد نظر را با کامپایلر (Compiler) استاندارد Java، کامپایل می‌نماییم:
```
javac Hello.java
```
با ایجاد این دستور، کامپایلر یک فایل باینری Java (در این مورد Hello.class) را تولید می‌کند.
<br>
ایده‌ی خوبی است که CLASSPATH را در خط فرمان با دستور javac مشخص کنید، مخصوصا هنگام نوشتن اسکریپت‌های shell یا ایجاد فایل. شما باید مکانی که این کد Java در آن اجرا می‌شود را تعیین نمایید. اگر Hello.class را روی سیستم کلاینت خود اجرا می‌کنید، CLASSPATH را برای تمام کلاس‌های اصلی وابسته که Hello.class برای اجرا نیاز دارد جستجو می‌کند. این جستجو باید منجر به یافتن کلاس‌های وابسته در یکی از موارد زیر شود:
-	به عنوان فایل‌های جداگانه در یک یا چند دایرکتوری، جایی که دایرکتوری‌ها در CLASSPATH مشخص شده‌اند.
-	در فایل‌های jar یا zip، که دایرکتوری‌های حاوی این فایل‌ها در CLASSPATH مشخص شده‌اند.

3-	در مورد resolver کلاس Hello تصمیم بگیرید. در این مورد، Hello.class را در سرور بارگذاری کنید، جایی که در بانک اطلاعاتی به عنوان یک شی طرح Java ذخیره می‌شود. هنگامی که متد world را فراخوانی می‌کنید، Oracle JVM کلاس‌های وابسته لازم مانند String را با استفاده از یک resolver مکان‌یابی می‌کند. در این مورد، Oracle JVM از resolver پیش‌فرض استفاده می‌کند. resolver پیش‌فرض این کلاس‌ها را ابتدا در اسکیمای (schema) فعلی و سپس در PUBLIC جستجو می‌کند. تمام کتابخانه‌های کلاس اصلی، از جمله java.lang، در PUBLIC یافت می‌شوند. ممکن است لازم باشد resolverهای مختلفی را مشخص کنید. این امکان وجود دارد که با استفاده از ابزار loadjava، مشکلات را زودتر و نه در زمان اجرا ردیابی کنید.

4-	کلاس را با استفاده از ابزار loadjava روی سرور بارگذاری کنید. شما باید نام کاربری و رمز عبور بانک اطلاعاتی مربوطه را نیز مشخص کنید. ابزار loadjava را به صورت زیر اجرا کنید:
```
loadjava -user user/password@ip:1521:database Hello.class
```
با استفاده از ویژگی verbose- در ابزار loadjava می‌توان پیغام‌های مرتبط با بارگذاری کلاس را مشاهده نمود.
<br>
5-	متد کامپایل‌شده را از طریق مشخصات فراخوانی (Call Specification) منتشر کنید. برای فراخوانی متد مربوطه Java با فراخوانی SQL، باید متد را با مشخصات فراخوانی منتشر کنید. مشخصات فراخوانی آرگومان‌هایی را که متد می‌گیرد و انواع SQL که باز می‌گرداند را تعریف می‌کند. مشخصات فراخوانی امکانی برای پیوند دادن فراخوانی‌های بین زبانی با هم به شیوه‌ای ثابت فراهم می‌کند.
```SQL
CREATE OR REPLACE FUNCTION FUNC_HELLO_WORD RETURN VARCHAR2 AS
LANGUAGE JAVA NAME 'Hello.world () return java.lang.String';
```
6-	تابع مربوطه را به شکل زیر فراخوانی کنید:
```SQL
DECLARE v_Return varchar2(1000);
BEGIN
  v_Return := FUNC_HELLO_WORD();  
  DBMS_OUTPUT.PUT_LINE('v_Return = ' || v_Return);
END;
```


