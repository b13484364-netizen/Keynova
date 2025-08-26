// المرجعية البصرية للصورة الأم: keynova-master.png
const keynovaMasterData = {
  dimensions: { width: 512, height: 512 },           // الأبعاد (تأكد من مطابقتها مع الصورة الفعلية)
  centerColor: { r: 0, g: 116, b: 255 },              // اللون في مركز التصميم (تم استخراجه تجريبيًا)
  dominantColorHex: "#0074ff",                       // اللون الأكثر وضوحًا في التصميم
  logoPosition: { x: 90, y: 256 },                    // موضع العنصر البصري البارز (يمكنك تعديله لاحقًا)
  shapeTags: ["hexagon", "circle", "logo-center"],   // عناصر هندسية داخل التصميم
  referenceImagePath: "assets/keynova-master.png"    // موقع الصورة داخل المشروع
};

export default keynovaMasterData;
