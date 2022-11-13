## 这是一个Markdown文件

#### 下面的内容是解析Vue组件的写法33

:::CustomBlock
```html
<input v-model="msg" placeholder="请输入内容"/>
<script lang="ts">
    import {ref} from 'vue'
    export default {
        setup() {
            return {
                msg: ref('')
            }
        }
    }
</script>
```
:::

> 33
