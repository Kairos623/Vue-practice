<template>
    <v-div>
        <h1>Список пользователей</h1>
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
                "ID", "Фамилия", "Имя","Отчество", "Дата начала сессии", "Дата конца сессии"
            ],
            tableContent: [
                [124534,'Волошин' , 'Алексей', 'Даниэльевич', '30/4/2022 19:00', ''],
                [467887,'Семина', 'Арина', 'Дмитриевна', '30/4/2022 16:00', ''],
                [456789, 'Алексеев', 'Иван', 'Дмитриевич', '30/4/2022 16:00', ''],
                [897655, 'Михайлова', 'София', 'Ярославовна', '30/4/2022 13:00', ''],
                [699766, 'Лебедев', 'Макар', 'Леонидович', '30/4/2022 10:00', ''],
              [124534,'Козлова' , 'Алисия', 'Степановна', '30/4/2022 08:00', '30/4/2022 10:00'],
              [456789, 'Родин', 'Иван', 'Тимофей', '29/4/2022 16:00', '29/4/2022 17:00'],
              [944556, 'Жукова', 'Анастасия', 'Александровна', '23/4/2022 06:00', '23/4/2022 15:00'],
              [467887,'Сорокина', 'Дарья', 'Семёновна', '11/4/2022 17:00', '11/4/2022 20:00'],
              [897655, 'Беляков', 'Александр', 'Максимович', '11/4/2022 13:00', '11/4/2022 17:00']

            ]
        }
    }
}
</script>

<style>
</style>