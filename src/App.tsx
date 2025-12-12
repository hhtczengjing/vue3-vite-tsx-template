import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div class="container">
        <van-empty description="正在研发中..." />
      </div>
    );
  }
});