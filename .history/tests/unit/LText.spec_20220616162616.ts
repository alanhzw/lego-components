/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2022-05-30 17:04:51
 * @LastEditTime: 2022-06-16 16:25:52
 * @FilePath: \lego-component\tests\unit\LText.spec.ts
 */
import { shallowMount } from '@vue/test-utils';
import LText from '@/components/LText';
import { textDefaultProps } from '../../src/defaultProps';

// 传入组件的属性
const msg = 'test';
const props = {
  ...textDefaultProps,
  text: msg,
};

describe('LText.vue', () => {
  it('default LText render', async () => {
    const wrapper = shallowMount(LText, { props });
    //
    expect(wrapper.text()).toBe(msg);
    //
    expect(wrapper.element.tagName).toBe('DIV');
    //
    const style = wrapper.attributes().style;
    expect(style.includes('font-size')).toBeTruthy();
    expect(style.includes('actionType')).toBeFalsy();
    wrapper.get('.add-count').trigger('click');
    expect(wrapper.get('.add-count').text()).toBe('1');
  });
});
