async function getIsHealthCertification(page) {
  const targetUrl =
    '//div[@class="col"]/div[@class="marks-wrap"]/div[@class="marks"]/div[@class="mark mark2"]/text()'; // 인증일때 링크
  const isHealthCertification = await page.$x(targetUrl);

  return isHealthCertification.length ? true : false;
}

module.exports = getIsHealthCertification;
