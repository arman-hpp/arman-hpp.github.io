+++
author = "آرمان حسن پور"
title = "مهندسی نرم‌افزار با توابع Get و Set" 
date = 2018-01-12T10:45:11+03:30
featured = false
comment = false
toc = false
reward = false
pinned = false
categories = [
	"OOP"
]
tags = [
    "OOP","OOD","Object Oriented","Object"
]
series = []
images = []
+++

اعضای داده‌ای خصوصی (private) یک کلاس تنها توسط توابع عضو آن کلاس قابل دسترسی هستند. بنابراین هر کلاس یا تابعی که از توابع عضو یک شی استفاده می‌کند و آن را از خارج از شی فراخوانی می‌کند، تنها می‌تواند توابع عمومی (public) عضو کلاس را به منظور درخواست سرویس‌های کلاس از هر شی خاص فراخوانی نماید.
<!--more-->
در برنامه‌نویسی شی‌گرا کلاس‌ها از توابع عضو عمومی برای انجام عمل set (یعنی نسب دادن مقدار به) و get (یعنی به دست آوردن مقدار از) برای دسترسی به اعضای داده‌ای خصوصی کلاس استفاده می‌کنند. این نام‎گذاری یک قرارداد متداول است و حتما لازم نیست نام این توابع عضو با set یا get آغاز گردد. توابع set گاهی اوقات تغییردهنده (mutator) نامیده می‌شوند (زیرا آن‌ها مقادیر را تغییر می‌دهند). همچنین توابع get نیز گاهی اوقات دست‌یابنده (accessor) نامیده می‌شوند (زیرا آن‌ها مقادیر را بازیابی می‌نمایند).
<br>
از طریق توابع set و get می‌توان دسترسی استفاده‌کنندگان از داده‌های خصوصی یک شی را کنترل نمود. این ویژگی اهمیت زیادی در مهندسی نرم‌افزار دارد زیرا اعلان اعضای داده‌ای با سطح دسترسی خصوصی منجر به رعایت اصل پنهان‌سازی داده (encapsulation) می‌شود. اگر توابع set و get را به‌صورت عمومی در اختیار سایرین قرار دهیم استفاده‌کنندگان یک کلاس تنها به صورت غیرمستقیم می‌توانند به داده‌های خصوصی کلاس دستیابی داشته باشند. استفاده‌کنندگان از کلاس فقط می‌توانند داده‌های یک شی را تغییر داده یا آن را بازیابی کند و از نحوه‌ی انجام این کار اطلاعی نداشته باشند. در برخی موارد، ممکن است نحوه‌ی استفاده‌ی داخلی یک کلاس از یک عضو داده‌ای و کاری که بر روی آن انجام می‌دهد، با طرز ارائه‌ی آن به استفاده کننده از آن داده و نحوه‌ی نمایش آن، بسیار متفاوت باشد. توابع set و get به استفاده‌کنندگان کلاس امکان تعامل با شی را می‌دهند، اما داده‌های خصوصی به شکل ایمن در خود شی، به‌صورت پنهان (encapsulated) باقی می‌مانند.
<br>
به عنوان مثال کلاس Customer یک عضو داده‌ای به نام name داشته و از آن‌ها برای نگهداری نام مشتری هر شی خاصی از کلاس Customer استفاده می‌کند. کلاس مزبور حاوی توابع عضو setName و getName می‌باشد.  تابع عضو setName نام مشتری را در یک عضو داده از کلاس Customer ذخیره می‌نماید – تابع عضو getName نام مشتری را در یک عضو داده‌ای از کلاس Customer  بازیابی می‌کند.
```Java
public class Customer {
  private String name; 

  // Getter
  public String getName() {
    return name;
  }

  // Setter
  public void setName(String newName) {
    this.name = newName;
  }
}
```
شاید فکر کنید که حتی اگر اعضای داده‌ای به صورت خصوصی تعریف شوند، استفاده‌کنندگان  همچنان می‌توانند هر زمان که بخواهند به کمک توابع set و get آن‌ها را بخوانند و دستکاری کنند، پس فایده‌ی این مخفی‌کاری چیست؟! جواب این است که توابع set را می‌توان طوری نوشت که داده‌های ورودی به اعضای داده‌ای را کنترل و فیلتر کنند و به هر داده‌ای اجازه‌ی نوشته‌شدن در اعضای داده‌ای را ندهند. همچنین می‌توان به کمک تابع get قالب نمایش داده‌ها را کنترل نمود. 
<br>
برای مثال می‌توانید به کمک تابع set از نوشته شدن مقادیر منفی در عضو داده‌ای "نمره" جلوگیری نمایید. 
```Java
public class Grade {
  private int theGrade; 
  
  // Getter
  public int getGrade() {
    return theGrade;
  }

  // Setter
  public void setAge(int newGrade) {
	if(newGrade > 0)
      this.theGrade = newGrade;
  }
}
```
برای مثال دیگر می‌توانید عضو داده‌ای "نمره" را به صورت کیفی با یک رشته ("عالی"، "خوب"، "متوسط"، "قابل قبول" و "مردود") بازیابی نمایید. 
```Java
public class Grade {
  private int theGrade; 
  
  // Getter
  public String getGrade() {
    if(theGrade >= 80)
		return "Excellent";
	else if(theGrade >= 60 and theGrade < 80)
		return "Good";
	else if(theGrade >= 50 and theGrade < 60)
		return "Average";	
	else if(theGrade >= 40 and theGrade < 50)
		return "Acceptable";
	else if(theGrade < 40)
		return "Fail";
	else	
		return "Invalid grade";
  }

  // Setter
  public void setAge(int newGrade) {
	if(newGrade > 0)
      this.theGrade = newGrade;
  }
}
```

هرچند که توابع عضو درون کلاس می‌تواند داده‌های خصوصی را مستقیما مورد دستیابی قرار دهند، اما بهتر است این توابع نیز برای اداره‌ی داده‌های خصوصی کلاس از توابع set و get استفاده کنند. به عنوان مثال تابع displayMessage یک پیغام مبنی بر معرفی مشتری که نام و سن مشتری در آن است را در خروجی نمایش می‌دهد.
```Java
public class Customer {
  private String name; 
  private int age;

  // Getter
  public String getName() {
    return name;
  }

  // Setter
  public void setName(String newName) {
    this.name = newName;
  }

  // Getter
  public int getAge() {
    return age;
  }

  // Setter
  public void setAge(int newAge) {
    this.age = newAge;
  }
  
  public String displayMessage() {
    return "My name is " + getName() + ". I am " + getAge() + "years old.";
  }
}
```
کنترل مقادیر ورودی به اعضای داده‌ای و قالب‌بندی نمایش آن‌ها می‌تواند تاثیر به‌سزایی در کاهش خطاها و خوانایی برنامه داشته باشد و پایداری و امنیت برنامه را بالا ببرد.

