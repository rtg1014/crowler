
const pupperteer = require("puppeteer");
const { Z_FIXED } = require("zlib");


(async()=>{
    
    // console.log('start')
    // console.info('puppeteer', pupperteer)
    
    const browser = await pupperteer.launch({
        headless : false,
        args : ['--windows-size-1920,1080'],
        slowMo:30,
    })

    const page = await browser.newPage()

    await Promise.all([
        (await page).goto("https://www.pillyze.com/products/1000/%EB%B9%84%ED%83%80%EB%AF%BCC-1000"),
        (await page).waitForNavigation()
    ])

 
    /*  회사이름 (고려은단)
    let targetCompanyName = '//div[@class="col"]/a[@class="search-brand"]/span[@class="txt1"]/text()';
    await page.waitForXPath(targetCompanyName);
    const temp = await page.$x(targetCompanyName);
    let x;

    let resultCN = []   // 이름 고려은단
    for(x of temp){
        const value = await x.evaluate((el) => el.textContent);
        resultCN.push(value)
    }
    console.log(resultCN)


    
    /*  영양제 이름 (비타민c 1000)
    let targetMedicineName = '//div[@class="col"]/h1[@class="txt2"]/text()';
    await page.waitForXPath(targetMedicineName);
    const temp = await page.$x(targetMedicineName);
    let x;

    let resultMN = []   ///영양제 이름
    for(x of temp){
        const value = await x.evaluate((el) => el.textContent);
        resultMN.push(value)
    }
    
    console.log(resultMN)


    
    /*  건강기능식품 인증유무 
    let healthFood = '//div[@class="col"]/div[@class="marks-wrap"]/div[@class="marks"]/div[@class="mark mark2d"]/text()';   // 인증일때 링크
    // let healthFood = '//div[@class="col"]/div[@class="marks-wrap"]/div[@class="marks"]/div[@class="mark mark2d"]/text()';   // 미인증일때 링크
    await page.waitForXPath(healthFood);
    const temp = await page.$x(healthFood);
    let x;

    let resultHF = []   ///건강기능식품 유무
    for(x of temp){
        const value = await x.evaluate((el) => el.textContent);
        resultHF.push(value)
    }
    if(resultHF.length==0){
        resultHF.push('건강기능식품 미인증')
    }

    console.log(resultHF)

    */
    
    
    /*  주요기능 및 보조기능 (항산화 등등)
    let effect = '//div[@class="card-wrap"]/div[@class="card-tags"]/div[@class="card-tag"]/text()';
    await page.waitForXPath(effect);
    const temp = await page.$x(effect);
    let x;

    let resultEF = []   /// 주요기능 이랑 보조기능 일단 다 때려박았음
    for(x of temp){
        const value = await x.evaluate((el) => el.textContent);
        resultEF.push(value)
    }
    
    console.log(resultEF)

    */

    

    await page.waitForTimeout(3000);
    browser.close

})();


FIXME
// 주요기능 보조기능은 아직 뭉텅이로 크롤링한 상태. 세분화 필요함
// 건강기능식품 유무는 링크 자체가 달라져서 이건 자동화 하는 부분에서 첫번째 링크로 크롤링 후 만약 leangth 가 없다면 다음 링크에서 다시 출력하게끔 하는 형태로 해야될 것 같음
// 건기식 유무같은 경우는 링크자체가 달라지니깐 여기만 좀 손보면 될것 같음
// 자동화까지만 하면 거의 완료될듯 합니다.