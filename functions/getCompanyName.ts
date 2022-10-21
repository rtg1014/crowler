async function getCompanyName(page) {
  let targetUrl =
    '//div[@class="col"]/a[@class="search-brand"]/span[@class="txt1"]/text()';

  const companyNames = await page.$x(targetUrl);
  const companyName = await companyNames[0].evaluate(
    (companyName) => companyName.textContent
  );
    
  return companyName;
}

module.exports = getCompanyName;