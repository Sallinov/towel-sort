module.exports = function towelSort (matrix) {
	matrix ? matrix.forEach((item, i, arr) => (i+1) % 2 === 0 ? item.reverse() : item) : matrix = []
	return [].concat(...matrix)
}
