async function getEffects(page) {
  const targetUrl =
    "(//div[@class='card-tags'])[1]/div[@class='card-tag']/text()";

  const effects = await page.$x(targetUrl);

  const effectPromises: string[] = [];
  for (const effect of effects) {
    const _effect = effect.evaluate((effect) => effect.textContent);
    effectPromises.push(_effect);
  }

  const resolvedEffects = Promise.all(effectPromises);

  return resolvedEffects;
}

module.exports = getEffects;
