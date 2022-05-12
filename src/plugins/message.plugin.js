import {useToast} from "vue-toastification";

export default {
  install: (app, option) =>  {
    app.config.globalProperties.$message = text => {
      const toast = useToast();
      toast(text);
    };
    app.config.globalProperties.$error = text => {
      const toast = useToast();
      toast.error("[Ошибка]: " + text);
    }
  }
}
