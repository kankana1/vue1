<template>
    <div>
        <h1>{{dataValue}}</h1>
    </div>
</template>
<script>

export default {
    name:'Home',
    data()
    {
        return{
            dataValue:"Data is set here inside the component.\n"
        }
    },
    beforeCreate()
    {
        this.dataValue="Data is set here in beforeCreate().\n";
        console.warn("Called 1st\n",this.dataValue)
    },
    created()
    {
        this.dataValue="Again data is set here in created()"
        console.warn("Called 2nd\n",this.dataValue);
    }
}
</script>