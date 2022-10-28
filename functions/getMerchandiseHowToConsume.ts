async function getMerchandiseHowToConsume(page) {
    let targetUrl = '//div[@class="card-wrap card-wrap2"]/span[@class="txt3"]/text()';

    const merchandiseHowToconsumes = await page.$x(targetUrl);
    const merchandiseHowToconsume = await merchandiseHowToconsumes[0].evaluate(
        (merchandiseHowToconsume) => merchandiseHowToconsume.textContent
      );
    
    return merchandiseHowToconsume;
}

module.exports = getMerchandiseHowToConsume;