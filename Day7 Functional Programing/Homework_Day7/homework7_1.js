`บรรทัดแรกของไฟล์การบ้านมีดังนี้ let arr = [1,2,3,4,5,6,7,8,9,10];
จงคัดเลือกสมาชิกใน array ให้เหลือเพียงสมาชิกที่หาร 2 ลงตัว และนำสมาชิกเหล่านั้นมาคูณ 1,000 ทุกตัว
เงื่อนไข : ห้ามใช้ loop for, while ในโจทย์ข้อนี้เด็ดขาด ใช้ได้แค่ map, reduce, filter เท่านั้น
Console.log ผลลัพธ์ที่ได้
`;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function modula(number) {
    return (number % 2 == 0);
  }

  function multiply (number) {
    return number * 1000;
  }

  let result = arr.filter( (modula))
                  .map((multiply));
                  console.log(result);
