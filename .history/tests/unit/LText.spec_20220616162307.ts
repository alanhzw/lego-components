/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2022-05-30 17:04:51
 * @LastEditTime: 2022-06-16 16:23:07
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
  // 测试点击 button, count 增加
  it('should update the count when clicking the button', async () => {
    const wrapper = shallowMount(LText, { props });

    // 触发点击事件
    await wrapper.get('.add-count').trigger('click');
    // 数字变为 1 (初始为0)
    expect(wrapper.get('.add-count').text()).toBe('1');
  });
});
