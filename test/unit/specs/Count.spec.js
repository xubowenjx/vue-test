import { mount } from '@vue/test-utils'
import Count from '@/components/Count'

describe('Count.vue', () => {
  const wrapper = mount(Count)
  it('render correct content', () => {
    const vm = wrapper.vm
    expect(vm.$el.querySelector('#count').textContent).toEqual('1')
  })
  it(' has a button ', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  it(' when click one button ,num will be 2 ', () => {
    let button = wrapper.find('button')// 找到按钮
    button.trigger('click')// 点击一下
    expect(wrapper.vm.count).toBe(2) // 取值
  })
})
