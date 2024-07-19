+++
author = "آرمان حسن پور"
title = "مقایسه دو مقدار ممیز شناور در سی شارپ" 
date = 2023-06-04T19:20:18+03:30
featured = false
comment = false
toc = false
reward = false
pinned = false
categories = [
	"DotNet", "CSharp", "Float"
]
tags = [
    "DotNet", "CSharp", "Float"
]
series = []
images = []
+++

برای مقایسه‌ی دو عدد ممیز شناور نیاز به یک مقدار انحراف مجاز وجود دارد تا مشخص شود تا چند رقم اعشار دو عدد باید باهم مقایسه شوند.
<!--more-->
با استفاده از تعریف یک مقدار انحراف مجاز و بررسی اختلاف دو عدد با مقدار انحراف مجاز می‌توان دو مقدار ممیز شناور را مقایسه نمود:
```csharp
public static class FloatUtils
{
    public static bool AreFloatsEqual(float a, float b, float tolerance)
    {
        return Math.Abs(a - b) <= tolerance;
    }

    public static bool IsFloatGreaterThan(float a, float b, float tolerance)
    {
        return (a - b) > tolerance;
    }

    public static bool IsFloatGreaterThanOrEqual(float a, float b, float tolerance)
    {
        return ((a - b) > tolerance) || Math.Abs(a - b) <= tolerance;
    }

    public static bool IsFloatLessThan(float a, float b, float tolerance)
    {
        return (b - a) > tolerance;
    }

    public static bool IsFloatLessThanOrEqual(float a, float b, float tolerance)
    {
        return ((b - a) > tolerance) || Math.Abs(a - b) <= tolerance;
    }
}
```

به منظور تست کدهای بالا می‌توان از پیاده‌سازی زیر استفاده نمود:
```csharp
using System;

public class Program
{
    public static void Main()
    {
        float a = 0.1f;
        float b = 0.1000001f;
        float tolerance = 0.00001f;

        bool areEqual = FloatUtils.AreFloatsEqual(a, b, tolerance);
        bool isGreaterThan = FloatUtils.IsFloatGreaterThan(a, b, tolerance);
        bool isLessThan = FloatUtils.IsFloatLessThan(a, b, tolerance);

        Console.WriteLine($"Are the floats equal? {areEqual}");
        Console.WriteLine($"Is a greater than b? {isGreaterThan}");
        Console.WriteLine($"Is a less than b? {isLessThan}");
    }
}
```