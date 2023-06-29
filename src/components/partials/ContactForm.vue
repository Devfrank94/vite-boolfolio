<script>
import {store} from '../../data/store.js'
import axios from 'axios';

export default {
    name:'ContactForm',
    data(){
      return{
        name: '',
        email: '',
        message: '',
        errors: {},
        sending: false,
        success: false

      }
    },

    methods:{
      sendForm(){
        this.sending = true;
        const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      axios.post(`${store.apiUrl}contacts`, data)
      .then(result => {
        this.sending = false;
        this.success = result.data.success;
        if(!result.data.success){
          this.errors = result.data.errors;
        }else{
          this.errors = {};
        }
      })
      .catch(error => {
          this.sending = false;
          this.errors = { message: ['C\'è un errore nel form.'] };
          console.error(error);
        });
    }
  }
}


</script>
<template>
  
  <form v-if="!success" @submit.prevent="sendForm()">
    <div>
      <input :class="{'error-form': errors.name}" v-model.trim="name" type="text" name="name" placeholder="Nome">
      <p v-for="(error, index) in errors.name" :key="index" class="error-msg ms-2">{{ error }}</p>
    </div>
    <div>
      <input :class="{'error-form': errors.email}"  v-model.trim="email" type="email" name="email" placeholder="Email">
      <p v-for="(error, index) in errors.email" :key="index" class="error-msg ms-2">{{ error }}</p>
    </div>
    <div>
      <textarea :class="{'error-form': errors.message}"  v-model.trim="message" name="message" placeholder="Inserisci il messaggio" cols="30" rows="10"></textarea>
      <p v-for="(error, index) in errors.message" :key="index" class="error-msg ms-2">{{ error }}</p>
    </div>
    <button type="submit" class="btn btn-success" :disabled="sending">{{sending ? 'Invio in corso...' : 'Invia'}}</button>

  </form>

  <div v-else><h2 class="success">Form inviato correttamente</h2></div>


</template>

<style lang="scss" scoped>
 @use '../../scss/main.scss' as *;

input,textarea,button{
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
}

.error-form{
  border: 2px solid red;
}

.error-msg{
  color: red;
  font-size: .8rem;
  font-weight: bold;
}

.success{
  color: green;
}

button{
  cursor: pointer;
}


</style>