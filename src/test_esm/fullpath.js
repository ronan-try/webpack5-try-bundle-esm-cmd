import debounce from 'lodash-es/debounce';

export function test () {
  console.log('test_esm', 'full path');
  console.log(debounce);
}
