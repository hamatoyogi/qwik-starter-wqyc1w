import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const state = useStore({
    count: 0,
    name: '',
  });

  return (
    <>
      <div>
        <p>Count = {state.count}</p>
        <button onClick$={() => state.count++}>+1</button>
      </div>
    </>
  );
});
