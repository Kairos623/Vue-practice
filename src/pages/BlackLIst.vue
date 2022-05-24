<template>
  <v-div>
    <h1>Черный список</h1>
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
        "ID", "Фамилия", "Имя", "Отчество","Причина внесения"
      ],
      tableContent: [
        [124534, 'Волошин' , 'Алексей', 'Даниэльевич','Нарушение правил пользования'],
        [467887, 'Брижко', 'Лейвик', 'Александрович','Порча имущества']
      ]
    }
  }
}
</script>

<style>
</style>