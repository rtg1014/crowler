const pupperteer = require("puppeteer");
const fs = require("fs")

const _getCompanyName = require("./functions/getCompanyName");
const _getMedicineName = require("./functions/getMedicineName");
const _getIsHealthCertification = require("./functions/getIsHealthCertification");
const _getEffects = require("./functions/getEffects");
const _getMedicineImageUrl = require("./functions/getMedicineImageUrl");
const _getMerchandiseHowToConsume = require("./functions/getMerchandiseHowToConsume");

(async () => {
  const browser = await pupperteer.launch({
    headless: false,
    args: ["--windows-size-1920,1080"],
    slowMo: 30,
  });

  const page = await browser.newPage();

  for (let i = 1; i <= 1000; i++) {
    await Promise.all([
      page.goto(`https://www.pillyze.com/products/${i}/a`),
      page.waitForNavigation(),
    ]);

    console.log("\ncurrent medicine id: ", i, "\n");
    await startCrawling(page);

    async function startCrawling(page) {
  const companyName = await _getCompanyName(page);
  console.log("companyName", companyName);
  
  const medcineName = await _getMedicineName(page);
  console.log("medcineName", medcineName);
  
  const isHealthCertification = await _getIsHealthCertification(page);
  console.log("isHealthCertification", isHealthCertification);
  
  const effects = await _getEffects(page);
  console.log("effects", effects);
  
  const medicineImageUrl = await _getMedicineImageUrl(page);
  console.log("medicineImageUrl", medicineImageUrl);

  const merchandiseHowToconsume = await _getMerchandiseHowToConsume(page);
  console.log('merchandiseHowToConsume',merchandiseHowToconsume);
}

    //TODO: db삽입 로직
  }
  
  browser.close;
})();



// FIXME;
// 주요기능 보조기능은 아직 뭉텅이로 크롤링한 상태. 세분화 필요함
// 건강기능식품 유무는 링크 자체가 달라져서 이건 자동화 하는 부분에서 첫번째 링크로 크롤링 후 만약 leangth 가 없다면 다음 링크에서 다시 출력하게끔 하는 형태로 해야될 것 같음
// 건기식 유무같은 경우는 링크자체가 달라지니깐 여기만 좀 손보면 될것 같음
// 자동화까지만 하면 거의 완료될듯 합니다.
