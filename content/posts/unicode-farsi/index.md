+++
author = "آرمان حسن پور"
title = "یونی‌کُد فارسی" 
date = 2020-09-01T10:00:35+03:30
featured = false
comment = false
toc = false
reward = false
pinned = false
categories = [
	"General"
]
tags = [
    "Unicode","Persian","Farsi"
]
series = []
images = []
+++

موفقیت یونی‌کُد در یکپارچه نمودن کدبندی کاراکترها سبب استفاده‌ی گسترده‌ در جهانی‌سازی و بومی‌سازی نرم‌افزارها شده‌است. امروزه اکثر شرکت‌های بزرگ دنیای کامپیوتر از این استاندارد استفاده می‌کنند و همچنین می‌توان گفت که تقریبا تمام برنامه‌های کاربردی جدید با این استاندارد کدگذاری شده‌اند. گسترش استاندارد یونی‌کُد موجب شده فرایند ایجاد وبسایت‌ها و برنامه‌های فارسی زبان بسیار آسان‌تر و کم هزینه‌تر باشد تا تمامی فارسی زبان‌ها هم بتوانند در دنیای اینترنت مطالب خود را عرضه کنند.
<!--more-->
همانطور که در مطلب ["یونی‌کُد چیست؟"](../unicode-info/) گفته شد هر کاراکتری اعم از اعداد و حروف، یک نقطه کد منحصربه‌فرد در یونی‌کُد دارد. در استاندارد یونی‌کُد نقطه کدهای زبان فارسی و عربی به دلیل تشابه در رسم الخط در یک مجموعه یا بلاک Block قرار داده شده‌اند. نقطه کدهای U+0600 الی U+06FF مربوط به بلاک عربی و فارسی می‌باشد. این لیست را می‌توانید از ["اینجا"](unicode_block_arabic.pdf "download") دانلود و مشاهده کنید. از آنجا که نقطه کدهای زبان فارسی با نقطه کدهای عربی ترکیب شده‌اند در این مطلب به صورت اختصاصی نقطه کدهای زبان فارسی را بررسی و لیست می‌نماییم. 
<br>
ابتدا نکاتی در مورد زبان فارسی را یادآوری می کنیم:
<br>
اساس الفبای فارسی با الفبای عربی یکی است، اما الفبای فارسی دارای چهار حرف است که واج‌های متناظر آن‌ها در عربی وجود ندارد، از آن طرف «ة» (تاء مربوط) در الفبای فارسی وجود ندارد. یک خوش‌نویس به نام خواجه ابولمال، سه حرف "پ"، "ژ" و "چ" را به الفبای عربی اضافه کرد و حرف "گ" نیز پس از چندی دگرگونی، به شکل کنونی درآمد.
<br>
برخی از حروف فارسی با حروف متناظر خود در عربی متفاوت هستند؛ مثلاً حرف «ک» در فارسی در حالت پایانی یا به‌طور تنها، با سرکش نوشته می‌شود درحالی‌که این حرف در عربی در این دو حالت بدون سرکش به صورت «ك» نوشته می‌شود. همچنین حرف «ی» در حالت پایانی در فارسی بدون نقطه است، اما در عربی با دونقطه در پایین («ي») نوشته می‌شود.
<br>
همزه (ء) در میان حروف سی‌ودو گانه‌ی الفبای فارسی شکلی از ملحقات حرف «الف» (صامت) است. شکل جدای آن (ء) و در حالت‌های گوناگون با ترکیب دیگر اشکال به صورت (آ - أ - ئ - ؤ) نوشته می‌شود. برای اطلاعات بیشتر به مطلب ["املای درست همزه در فارسی"](../hamzeh/) مراجعه نمایید.
<br>
حروف فارسی به ترتیب زیر در استاندارد یونی‌کُد وجود دارند:
<br>

| حرف | نقطه کد | توضیحات
|:---|:---|:---
| ء | U+0621 | Arabic Letter Hamza
| آ | U+0622 | Arabic Letter Alef with Madda Above	
| أ | U+0623 | Arabic Letter Alef with Hamza Above
| ؤ | U+0624 | Arabic Letter Waw with Hamza Above
| إ | U+0625 | Arabic Letter Alef with Hamza Below
| ئ | U+0626 | Arabic Letter Yeh with Hamza Above
| ا | U+0627 | Arabic Letter Alef
| ب | U+0628 | Arabic Letter Beh
| پ | U+067E | Arabic Letter Peh
| ت | U+062A | Arabic Letter Teh
| ث | U+062B | Arabic Letter Theh
| ج | U+062C | Arabic Letter Jeem
| چ | U+0686 | Arabic Letter Tcheh
| ح | U+062D | Arabic Letter Hah
| خ | U+062E | Arabic Letter Khah
| د | U+062F | Arabic Letter Dal
| ذ | U+0630 | Arabic Letter Thal
| ر | U+0631 | Arabic Letter Reh
| ز | U+0632 | Arabic Letter Zain
| ژ | U+0698 | Arabic Letter Jeh
| س | U+0633 | Arabic Letter Seen
| ش | U+0634 | Arabic Letter Sheen
| ص | U+0635 | Arabic Letter Sad
| ض | U+0636 | Arabic Letter Dad
| ط | U+0637 | Arabic Letter Tah
| ظ | U+0638 | Arabic Letter Zah
| ع | U+0639 | Arabic Letter Ain
| غ | U+063A | Arabic Letter Ghain
| ف | U+0641 | Arabic Letter Feh 
| ق | U+0642 | Arabic Letter Qaf
| ک | U+06A9 | Arabic Letter Keheh
| گ | U+06AF | Arabic Letter Gaf
| ل | U+0644 | Arabic Letter Lam
| م | U+0645 | Arabic Letter Meem
| ن | U+0646 | Arabic Letter Noon
| و | U+0648 | Arabic Letter Waw
| ه | U+0647 | Arabic Letter Heh
| ی | U+06CC | Arabic Letter Farsi Yeh

<br>
اعداد فارسی نیز به ترتیب زیر در استاندارد یونی‌کُد وجود دارند:
<br>
<br>

| عدد | نقطه کد | توضیحات
|:---|:---|:---
| ۰ | U+06F0 | Extended Arabic-Indic Digit Zero
| ۱ | U+06F1 | Extended Arabic-Indic Digit One
| ۲ | U+06F2 | Extended Arabic-Indic Digit Two
| ۳ | U+06F3 | Extended Arabic-Indic Digit Three
| ۴ | U+06F4 | Extended Arabic-Indic Digit Four
| ۵ | U+06F5 | Extended Arabic-Indic Digit Five
| ۶ | U+06F6 | Extended Arabic-Indic Digit Six
| ۷ | U+06F7 | Extended Arabic-Indic Digit Seven
| ۸ | U+06F8 | Extended Arabic-Indic Digit Eight
| ۹ | U+06F9 | Extended Arabic-Indic Digit Nine
