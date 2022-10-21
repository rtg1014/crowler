async function getMedicineImageUrl(page) {
  const targetUrl = '//div[@class="card-wrap"]/img[@class="item-img-big"]';
  const imageUrls = await page.$x(targetUrl);
  const imageUrl = await imageUrls[0].evaluate((image) => image.src);

  return imageUrl;
}

module.exports = getMedicineImageUrl