+++
author = "آرمان حسن پور"
title = "شی‌گرایی (Object Oriented) چیست؟" 
date = 2017-05-12T19:47:12+03:30
featured = false
comment = false
toc = false
reward = false
pinned = false
categories = [
	"General","OOP"
]
tags = [
    "OOP","OOD","Object Oriented","Object"
]
series = []
images = []
+++

**شی‌گرایی** یک راه طبیعی تفکر در مورد جهان پیرامون و نوشتن برنامه‌های کامپیوتری است. در دنیای واقعی به هرجا که بنگرید اشیا را مشاهده می‌کنید: اشخاص، حیوانات، گیاهان، اتوموبیل‌ها، هواپیماها، ساختمان‌ها، کامپیوترها و مواردی از این قبیل. انسان‌ها هر روز اشیا را در اطراف خود مشاهده می‌کنند و در مورد آن‌ها به تفکر می‌پردازند.
<!--more-->
اغلب اشیا را به دو دسته تقسیم می‌نماییم: جاندار و بی جان. اشیای جاندار زنده هستند، حرکت می‌کنند و یک سری اعمال انجام می‌دهند. از سوی دیگر، اشیای بی‌جان به خودی خود حرکت نمی‌کنند. اما در هر صورت هر دو نوع شی در یک سری چیزها مشترک هستند. همه‌ی آن‌ها دارای صفاتی می‌باشند (مثلا اندازه، شکل، رنگ و وزن)، و همه‌ی آن‌ها رفتارهایی از خود بروز می‌دهند (مثلا یک توپ قِل می‌خورد، می‌جهد، باد می‌شود و کم باد می‌گردد – یک نوزاد گریه می‌کند، می‌خوابد، می‌خزد، راه می‌رود و چشمان خود را برهم می‌زند – یک اتوموبیل شتاب می‌گیرد، ترمز می‌کند و می‌پیچد). 
<br>
انسان‌ها با مطالعه‌ی صفات اشیا موجود و مشاهده رفتار آن‌ها به کسب اطلاعات در مورد آن‌ها می‌پردازند. اشیای متفاوت می‌توانند دارای صفات مشابه باشند و می‌توانند رفتارهای مشابه از خود بروز دهند. به عنوان مثال، می‌توان میان نوزادان، بزرگسالان و میان انسان‌ها و شامپانزه‌ها شباهت‌هایی یافت.
<br>
**طراحی شی‌گرا** (**O**bject-**o**riented **d**esign) اجزای نرم‌افزاری را بر اساس اشیای دنیای واقعی مدل می‌نماید. در حقیقت این روش، مدل‌سازی اشیا توسط صفات، رفتارها و مناسبات مشترک آن‌ها به همان صورتی که ما اشیا دنیای واقعی را توصیف می‌کنیم می‌باشد. طراحی شی‌گرا همچنین ارتباط میان اشیا را مدل می‌کند. دقیقا به همان گونه که افراد به یکدیگر پیغام می‌فرستند (مثلا یک گروه‌بان به یک سرباز دستور می‌دهد)، اشیا نیز از طریق پیغام‌ها با یکدیگر ارتباط برقرار می‌نمایند. مثلا یک شی حساب بانکی ممکن است یک پیغام مبنی بر کاهش پول موجود در خود به یک میزان معین را دریافت نماید. چرا که مشتری آن میزان پول را از حساب خود برداشت نموده است.
<br>
طراحی شی‌گرا، صفات و اعمال (رفتارها) را در اشیا **پنهان (Encapsulate)** می‌سازد. اشیا دارای خصوصیت پنهان‌سازی اطلاعات هستند. این بدان معنی است که ممکن است اشیا برقراری ارتباط با دیگری را در میان رابطه‌های خویش تعریف‌شده بدانند، اما آن‌ها اجازه‌ی کسب اطلاع از نحوه پیاده‌سازی سایر اشیا را ندارند. جزییات پیاده‌سازی درون خود اشیا پنهان است. برای نمونه، اگر ما نحوه‌ی استفاده از پدال گاز، پدال ترمز، فرمان و مواردی از این قبیل را بدانیم، می‌توانیم به شکلی کارآمد بدون آن که از جزییات نحوه‌ی عملکرد داخلی سیستم‌های موتور، ترمز و اگزوز آگاهی داشته باشیم، یک اتوموبیل را برانیم. پنهان‌سازی اطلاعات، یک امر حیاتی در مهندسی نرم‌افزار خوب محسوب می‌شود.
<br>
برنامه‌نویسی با زبان‌هایی که از شی‌گرایی پشتیبانی می‌کنند، **برنامه‌نویسی شی‌گرا** (**O**bject-**o**riented **p**rogramming) نامیده می‌شود. در برنامه‌نویسی شی‌گرا به برنامه‌نویسان امکان پیاده‌سازی یک طراحی شی‌گرا به عنوان یک سیستم نرم‌افزاری کارآمد داده می‌شود. در زبان‌های برنامه‌نویسی شی‌گرا، واحد برنامه‌نویسی **کلاس (Class)** است که در نهایت اشیا از روی آن **نمونه‌سازی (Instantiate)** می‌شوند. کلاس‌ها برای اشیا به منزله طرح اولیه برای خانه‌ها است. یک کلاس را می‌توان به عنوان نقشه‌ای برای ساختن یک شی از روی یک کلاس در نظر گرفت. دقیقا همان‌گونه که ما می‌توانیم از روی یک طرح تعداد زیادی خانه بسازیم، می‌توانیم اشیا بسیاری را از روی یک کلاس نمونه‌سازی کنیم. شما نمی‌توانید در طرح یک آشپزخانه اقدام به آشپزی نمایید، بلکه کار آشپزی را در آشپزخانه‌ی موجود در یک خانه انجام می‌دهید. شما نمی‌توانید در طرح یک اتاق خواب بخوابید، بلکه باید در اتاق خواب موجود در یک خانه بخوابید.
کلاس‌ها  شامل توابعی برای پیاده‌سازی اعمال و داده‌هایی برای پیاده‌سازی صفات می‌باشند. در حقیقت کلاس‌ها دارای مجموعه‌ای از داده‌ها و توابعی هستند که عمل خاصی را بر روی داده‌ها انجام می‌دهند و خدماتی را برای سرویس‌گیرندگان (یعنی سایر کلاس‌ها یا توابعی که از کلاس استفاده می‌نمایند) فراهم می‌نمایند. اجزا داده‌ای یک کلاس تحت عنوان اعضای داده شناخته می‌شوند. برای مثال، یک کلاس حساب بانکی می‌تواند شامل یک شماره حساب و یک موجودی باشد. اجزای تابع یک کلاس تحت عنوان توابع عضو (متد) شناخته می‌شوند. برای مثال، یک کلاس حساب بانکی می‌تواند شامل توابع عضو برای افزایش مبلغ موجودی، کاهش مبلغ موجودی و اعلام موجودی فعلی باشد. 
<br>
کلاس‌ها می‌توانند با سایر کلاس‌ها رابطه داشته باشند. برای مثال، در یک طراحی شی‌گرا از یک بانک، کلاس تحویل‌دار باید با سایر کلاس‌ها مرتبط باشد، کلاس‌هایی از قبیل کلاس "مشتری"، کلاس "حواله‌دهنده"، کلاس "گاو صندوق" و مواردی از این قبیل. این روابط تحت عنوان **پیوندها (Associations)** شناخته می‌شوند. به عنوان مثالی دیگر در حالتی که اشیا یک کلاس دارای خصیصه‌های یکسان باشند مثل یک کلاس از وسایل نقلیه (اتوموبیل‌ها، کامیون‌ها، واگن‌ها و اسکیت‌ها)، در طراحی شی‌گرا می‌توان از یک کلاس پایه "خودرو" که شامل ویژگی‌های مشترک بین همه‌ی وسایل نقلیه دارد استفاده نمود. مطمئنا کلاس "خودرو" ویژگی‌های کلی‌تری از نسبت به هر نوع خاص وسیله نقلیه دارد و همه‌ی وسایل نقلیه می‌توانند از این کلاس به صورت مشترک استفاده نماید یا به اصلاح از آن **ارث (Inheritance)** ببرند. 
<br>
پیاده‌سازی نرم‌افزار بر اساس کلاس، امکان استفاده‌ی مجدد از کلاس‌ها را در طراحی سیستم‌های نرم‌افزاری بعدی فراهم می‌آورد. مجموعه کلاس‌های مرتبط با هم اغلب به صورت قطعه برنامه‌هایی با قابلیت استفاده مجدد در یک گروه دسته‌بندی می‌شوند. دقیقا همان‌گونه که یک دلال معاملات ملکی می‌گوید سه عامل تاثیر‌گذار بر قیمت املاک "مکان، مکان، مکان" است، افراد حاضر در جامعه‌ی توسعه‌ی نرم‌افزار هم اغلب می‌گویند سه عامل تاثیر‌گذار بر آینده‌ی توسعه‌ی نرم‌افزار **"استفاده مجدد، استفاده مجدد، استفاده مجدد"** است. استفاده مجدد از کلاس‌های موجود در هنگام ساختن کلاس‌ها و برنامه‌های جدید باعث صرفه‌جویی در زمان، هزینه و کار مورد نیاز می‌گردد. همچنین استفاده مجدد به برنامه‌نویسان در جهت ایجاد سیستم‌های قابل اطمینان‌تر و کارآمدتر کمک می‌کند، زیرا کلاس و قطعه برنامه‌های موجود اغلب تست، اشکال‌زدایی و بررسی کارآمدی را به شکلی جامع پشت سر گذاشته اند.
<br>
با استفاده از فناوری شی، شما می‌توانید بخش اعظم نرم‌افزار جدید مورد نیاز خود را با ترکیب نمودن کلاس‌های موجود بسازید. هر کلاس جدیدی که شما ایجاد می‌نمایید پتانسیل تبدیل شدن به یک سرمایه‌ی نرم‌افزاری با ارزش را دارد، بنابراین شما و سایر برنامه‌نویسان می‌توانید از آن مجددا برای تسریع و بهبود با کیفیت فرایندهای توسعه نرم‌افزار در آینده استفاده کنید.