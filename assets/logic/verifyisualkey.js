import keynovaMasterData from './keynovaMasterData.js';

// دالة بسيطة لفحص الأبعاد ولون المركز فقط
export function verifyVisualKey(imageElement) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = imageElement.width;
  canvas.height = imageElement.height;
  ctx.drawImage(imageElement, 0, 0);

  // استخراج الأبعاد
  const uploadedWidth = imageElement.width;
  const uploadedHeight = imageElement.height;

  // استخراج لون مركز الصورة
  const centerX = Math.floor(uploadedWidth / 2);
  const centerY = Math.floor(uploadedHeight / 2);
  const centerPixel = ctx.getImageData(centerX, centerY, 1, 1).data;
  const uploadedCenterColor = {
    r: centerPixel[0],
    g: centerPixel[1],
    b: centerPixel[2]
  };

  // مقارنة الأبعاد
  const matchDimensions =
    uploadedWidth === keynovaMasterData.dimensions.width &&
    uploadedHeight === keynovaMasterData.dimensions.height;

  // مقارنة اللون
  const matchColor =
    Math.abs(uploadedCenterColor.r - keynovaMasterData.centerColor.r) < 10 &&
    Math.abs(uploadedCenterColor.g - keynovaMasterData.centerColor.g) < 10 &&
    Math.abs(uploadedCenterColor.b - keynovaMasterData.centerColor.b) < 10;

  return matchDimensions && matchColor;
}
