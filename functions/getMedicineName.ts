async function getMedicineName(page) {
  let targetUrl = '//div[@class="col"]/h1[@class="txt2"]/text()';

  const medicineNames = await page.$x(targetUrl);
  const medcineName = await medicineNames[0].evaluate(
    (medcineName) => medcineName.textContent
  );

  return medcineName;
}

module.exports = getMedicineName;