+++
author = "آرمان حسن پور"
title = "ایجاد شناسه قبض و شناسه پرداخت در CSharp" 
date = 2022-09-15T09:50:51+03:30
featured = false
comment = false
toc = false
reward = false
pinned = false
categories = [
	"DotNet", "CSharp"
]
tags = [
    "CSharp", "DotNet"
]
series = []
images = []
+++

هر قبض یک شناسه قبض و یک شناسه پرداخت دارد که برای استعلام و پرداخت قبوض از آنها استفاده می‌شود. این دو عامل، اعدادی چند رقمی هستند که هر کدام از رقم‌های آن‌ها معنای خاصی دارد. در ادامه به توضیح این دو عدد و معنای رقم‌های آن و نحوه ایجاد آن می‌پردازیم.
<!--more-->
## شناسه قبض
شناسه قبض شامل حداقل ۶ و حداکثر ۱۳ رقم است. این عدد که مشخصات مشتری و نوع قبض (قبض گاز، قبض برق، قبض آب، قبض همراه اول و …) را مشخص می‌کند، همواره برای یک قبض خاص بدون تغییر است. برای مثال، شناسه قبض آب یک آدرس مشخص، در همه دوره‌ها و مستقل از میزان مصرف، یکسان است.

### ارقام تشکیل دهنده شناسه قبض
- کد پرونده، حداکثر ۸ رقم
- کد شرکت تابعه، ۳ رقم
- کد نوع خدمت، ۱ رقم
- رقم کنترلی، ۱ رقم

**کد پرونده:** این کد معرف مشترکین شرکت‌های خدماتی است و هر مشترک یک کد پرونده منحصر به فرد دارد. پس از هر تراکنش پرداخت قبض بانک‌ها اطلاعات این کد را به همراه سایر ارقام شناسه برای شرکت‌های خدماتی (مانند شرکت آب و فاضلاب یا برق) ارسال می‌کنند. این شرکت‌ها به کمک کد پرونده تشخیص می‌دهند که کدام مشترک قبض خود را پرداخت کرده است.

**کد شرکت تابعه:** این کد که یک عدد سه رقمی است، شرکت تابعه صادر کننده قبض را مشخص می‌کند. برای مثال، شرکت توزیع نیروی برق اصفهان را می‌توان نام برد.

**کد نوع خدمت:** نوع قبض به کمک این کد یک رقمی قابل تشخیص است. در جدول زیر می‌توانید کد خدمات مختلف را مشاهده کنید:

| کد       | ۱   | ۲   | ۳   | ۴         | ۵          | ۶             | ۷             | ۸             | 9             |
| -------- | --- | --- | --- | --------- | ---------- | ------------- | ------------- | ------------- | ------------- |
| نوع شرکت | آب  | برق | گاز | تلفن ثابت | تلفن همراه | عوارض شهرداری | سازمان مالیات | جرایم رانندگی | متفرقه |

**رقم کنترلی شناسه:** این رقم کنترل کننده‌ کلیه ارقام شناسه قبض است و از ورود اشتباه شناسه قبض جلوگیری می‌کند. رقم کنترلی با استفاده از فرمول زیر که فرمول باقی‌مانده مبنای ۱۱ است، محاسبه می‌شود. روش محاسبه رقم کنترلی به صورت زیر است:

- از راست به چپ به هر رقم وزن داده می‌شود که از عدد ۲ شروع شده و تا ۷ ادامه پیدا می‌کند.
- هر رقم در وزن خودش ضرب شده و حاصل جمع کل محاسبه می‌شود.
- عدد نهایی بر ۱۱ تقسیم شده و اگر باقی‌مانده آن صفر یا یک شد رقم کنترلی صفر می‌شود.
- برای سایر حالت‌ها باقی‌مانده از ۱۱ کم می‌شود و نتیجه تفریق برابر رقم کنترلی است.

## شناسه پرداخت
شناسه پرداخت حداقل از ۶ رقم و حداکثر از ۱۳ رقم تشکیل شده است. مبلغ، سال و دوره قبض از این شناسه به ‌دست می‌آید.

### ارقام تشکیل دهنده شناسه پرداخت
- مبلغ: حداکثر ۸ رقم
- کد سال: ۱ رقم
- کد دوره: ۲ رقم
- رقم کنترلی اول: ۱ رقم
- رقم کنترلی دوم: ۱ رقم

**مبلغ:** با حذف سه صفر از سمت راست مبلغ، باقی‌مانده در این قسمت ثبت می‌شود. برای مثال اگر مبلغ قبضی ۱۳۲۰۰۰ ریال باشد، در این قسمت عدد ۱۳۲ ثبت می‌شود.

**کد سال:** شرکت‌های خدماتی به دو صورت این رقم را درج می‌کنند:

1. رقم یکان سال صدور قبض: (مثلاً ۸ برای سال ۱۳۹۸)
2. از رقم صفر برای سال اول، ۱ برای سال دوم و به همین ترتیب رقم ۹ برای دهمین سال صدور قبض، استفاده می‌شود. با شروع سال یازدم این عدد دوباره از صفر شروع می‌شود.

**کد دوره:** این کد، شماره دوره صدور هر قبض را مشخص می‌کند. برای مثال ۰۴ به معنای چهارمین دوره چاپ قبض در سال است.

**رقم کنترلی اول:** این رقم، کلیه ارقام شناسه پرداخت را که تا اینجا معرفی شدند، کنترل کرده و با توجه به فرمول مبنای ۱۱ که در قسمت شناسه قبض بررسی شد، محاسبه می‌شود.

**رقم کنترلی دوم:** برای محاسبه رقم کنترلی دوم، کلیه ارقام شناسه قبض و شناسه پرداخت را کنار هم قرار داده (ابتدا شناسه قبض در سمت چپ و سپس شناسه پرداخت، پس از حذف صفر از سمت چپ هر شناسه در صورت وجود) و بر روی تمام ارقام بر اساس فرمول مبنای ۱۱ محاسبه و اعمال می‌شود.

![Center](/bill-generator-algo.jpg#center)

کد CSharp تولید شناسه قبض و شناسه پرداخت به صورت زیر است:

```CSharp
using System.Globalization;
using System.Numerics;

namespace BillNum
{
    /// <summary>
    /// تولید شناسه قبض و شناسه پرداخت
    /// </summary>
    public static class BillGenerator
    {
        private const int MinWeight = 2;
        private const int MaxWeight = 7;

        /// <summary>محاسبه شناسه قبض</summary>
        /// <param name="directoryCode">شماره پرونده</param>
        /// <param name="companyCode">کد شرکت</param>
        /// <param name="billType">نوع قبض</param>
        /// <returns>شناسه قبض</returns>
        public static string GenerateBillId(string directoryCode, string companyCode, string billType)
        {
            ValidateNumeric(directoryCode, 1, 8, nameof(directoryCode), out _);
            ValidateNumeric(companyCode, 3, 3, nameof(companyCode), out _);
            ValidateNumeric(billType, 1, 1, nameof(billType), out _);

            var billId = BigInteger.Parse($"{directoryCode}{companyCode}{billType}");
            var digitCode = CalculateCheckDigit(billId);

            return AppendCheckDigit(billId, digitCode);
        }

        /// <summary>محاسبه شناسه پرداخت</summary>
        /// <param name="amount">مبلغ</param>
        /// <param name="yearCode">کد سال</param>
        /// <param name="termCode">کد دوره</param>
        /// <param name="billId">شناسه قبض</param>
        /// <returns>شناسه پرداخت</returns>
        public static string GeneratePaymentId(string amount, string yearCode, string termCode, string billId)
        {
            ValidateNumeric(amount, 1, 11, nameof(amount), out var amountLong);
            ValidateNumeric(yearCode, 1, 1, nameof(yearCode), out _);
            ValidateNumeric(termCode, 2, 2, nameof(termCode), out _);
            ValidateNumeric(billId, 13, 13, nameof(billId), out _);

            var paymentId = BigInteger.Parse($"{amountLong / 1000}{yearCode}{termCode}");
            var digitCode = CalculateCheckDigit(paymentId);
            var paymentIdWithDigit = AppendCheckDigit(paymentId, digitCode);
            var combined = BigInteger.Parse($"{billId}{paymentIdWithDigit}");
            var finalDigit = CalculateCheckDigit(combined);

            return AppendCheckDigit(BigInteger.Parse(paymentIdWithDigit), finalDigit);
        }

        private static string AppendCheckDigit(BigInteger inputCode, int digitCode)
        {
            var needsAdjustment = digitCode > 1;
            var result = needsAdjustment
                ? inputCode * 10 + (11 - digitCode)
                : inputCode * 10;

            return result.ToString(CultureInfo.InvariantCulture);
        }

        private static int CalculateCheckDigit(BigInteger inputCode)
        {
            var weight = MinWeight;
            var sum = 0;
            var temp = inputCode;

            while (temp != 0)
            {
                sum += (int)(temp % 10 * weight);
                temp /= 10;
                weight = weight == MaxWeight ? MinWeight : weight + 1;
            }

            return sum % 11;
        }

        private static void ValidateNumeric(string value, int minLength, int maxLength, string paramName,
            out ulong result)
        {
            if (!ulong.TryParse(value, NumberStyles.None, CultureInfo.InvariantCulture, out result)
                || value.Length < minLength || value.Length > maxLength)
                throw new ArgumentException($"The {paramName} is invalid.", paramName);
        }
    }
}

```