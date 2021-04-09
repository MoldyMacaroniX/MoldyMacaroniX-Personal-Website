module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('tools');
    eleventyConfig.addPassthroughCopy('files');
    eleventyConfig.addPassthroughCopy({'static':  '.'});
}