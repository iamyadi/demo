<template>
    <table>
        <thead>
        <tr>
            <th>数据</th>
            <th>产品规格</th>
            <th>生产日期</th>
            <th>选择</th>
        </tr>
        </thead>
        <tbody  v-for='(item, index) in items'>
        <tr>
            <td v-show='!isShow[index]'  @click='changeMethod($event,index)'>{{item.message}}</td>
            <td v-show='isShow[index]'><input v-model='item.message' @blur='blur(index)'></td>

            <td v-show='!isShow[index]'  @click='changeMethod($event,index)'>{{item.msg}}</td>
            <td v-show='isShow[index]'><input v-model='item.msg' @blur='blur(index)'></td>

            <td v-show='!isShow[index]' @click='changeMethod($event,index)'>{{item.edit}}</td>
            <td v-show='isShow[index]'><input v-model='item.edit' @blur='blur(index)'></td>
            <td>
                <select v-model='selected[index]'>
                    <option v-for="option in options" :value="option.value">{{option.text}}</option>
                </select>
            </td>
        </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        data() {
            return {
                items: [
                    {message: '1', msg: 'aaa', edit: 'asdfa'},
                    {message: '2', msg: 'bbb', edit: 'asdfa'},
                    {message: '3', msg: 'ccc', edit: 'asfa'},
                    {message: '4', msg: 'ddd', edit: 'adf'}
                ],
                isShow:[false, false, false, false],
                selected: ['A','B','C','D'],
                options:[
                    { text: 'One', value: 'A' },
                    { text: 'Two', value: 'B' },
                    { text: 'Three', value: 'C' },
                    { text: 'Tw', value: 'D' },
                ]
            }
        },
        methods:{
            changeMethod(el,index){
                this.isShow.splice(index,1,true)
                let put = el.target.nextElementSibling.children[0]
                setTimeout(() => {
                    put.focus()
                }, 0)
            },
            blur(index) {
                let active = document.onmousedown(event)
                if(){
                    this.isShow.splice(index,1,false)
                }



            }
        }
    }
</script>