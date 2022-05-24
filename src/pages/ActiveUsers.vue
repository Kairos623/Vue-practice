<template>
<v-div>
    <h1>Активные пользователи</h1>
    <v-table :headers="tableHeaders" :content="tableContent" />
</v-div>
</template>

<script>
import VTable from "@/components/VTable.vue";

export default {
    components: {
        VTable
    },
    data() {
        return {
            tableHeaders: [
                "ID", "Фамилия", "Имя", "Отчество"
            ],
            tableContent: [
                [124534, 'Волошин' , 'Алексей', 'Даниэльевич'],
                [467887, 'Семина', 'Арина', 'Дмитриевна'],
                [456789, 'Алексеев', 'Иван', 'Дмитриевич'],
                [897655, 'Михайлова', 'София', 'Ярославовна'],
                [699766, 'Лебедев', 'Макар', 'Леонидович'],
                [944556, 'Жукова', 'Анастасия', 'Александровна']
            ]
        }
    }
}
</script>

<style>
</style>