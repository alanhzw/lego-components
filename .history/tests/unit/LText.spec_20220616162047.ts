/*
 * @Author: 一尾流莺
 * @Description:
 * @Date: 2022-05-30 17:04:51
 * @LastEditTime: 2022-06-16 16:20:47
 * @FilePath: \lego-component\tests\unit\LText.spec.ts
 */
import type { VueWrapper } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import LText from '@/components/LText';
import { textDefaultProps } from '../../src/defaultProps';

let wrapper: VueWrapper<any>;
describe('LText.vue', () => {
  beforeEach(() => {
    // 获取组件
    wrapper = shallowMount(LText, {});
  });
  afterEach(() => {
    //
  });
  // 测试点击 button, count 增加
  it('should update the count when clicking the button', async () => {
    // 触发点击事件
    await wrapper.get('.add-count').trigger('click');
    // 数字变为 1 (初始为0)
    expect(wrapper.get('.add-count').text()).toBe('1');
  });
});
