const del = require('del');

const delFn = () => {
  return del(["./dist/*"])
}

exports.del = delFn;
