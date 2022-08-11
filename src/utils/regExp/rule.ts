/**
 * @description
 * 匹配中文字符
 * 它被称为Unicode属性转义
 * 已经在Chrome 64，Firefox 79，Safari 11.1和Node.js 10中可用。
 *
 * @example
 * Reg_Match_Chinese_Characters.test('你好') // true
 * '你好!'.match(Match_Chinese_Characters) // ['你', index: 0, input: '你好!!!', groups: undefined]
 */
export const Reg_Match_Chinese_Characters: RegExp = /\p{Script=Han}/u
