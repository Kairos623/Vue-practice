<template>
    <table class="v-table">
            <thead class="v-table-header">
                <tr>
                    <th class="v-table-element" v-for="item in headers" :key="item">{{ item }}</th>
                </tr>
            </thead>
            <tbody class="v-table-content">
                <tr v-for="row in content" :key="row">
                    <td class="v-table-element" v-for="item in row" :key="item">{{ item }}</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
export default {
    name: 'v-table',
    props: ['headers', 'content']
};
</script>

<style>
th,
td {
  border-left: 3px solid #6C757D;
  border-right: 3px solid #6C757D;

}

.v-table {
    width: 100%;
    text-align: center;
  margin-bottom: 2%;
  border: 3px solid #6C757D;
}

.v-table-header {
    border-bottom: 3px solid #6C757D;
}

.v-table-element {
    padding: 5px;
}
</style>