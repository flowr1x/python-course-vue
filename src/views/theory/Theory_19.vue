<template>
  <div class="manual__text text-manual">
    <div class="text-manual__header">
      <h1 class="text-manual__title">Тема 19</h1>
      <div class="text-manual__subtitle">Кортеж</div>
    </div>
    <div class="text-manual__body">
      <section  class="text-manual__doc-section">
        <h2 class="text-manual__section-title">Определение</h2>
        <div class="text-manual__section-block">
          <p>Кортежи (tuple) в Python – это те же списки за одним исключением. Кортежи неизменяемые
            структуры данных. Так же как списки они могут состоять из элементов разных типов,
            перечисленных через запятую. Кортежи заключаются в круглые, а не квадратные скобки.</p>
          <pre><code class="python">>>> a = (10, 2.13, "square", 89, 'C')
    >>> a
    (10, 2.13, 'square', 89, 'C')</code></pre>
          <p>Из кортежа можно извлекать элементы и брать срезы:</p>
          <pre><code class="python">>>> a[3]
    89
    >>> a[1:3]
    (2.13, 'square')</code></pre>
          <p>Однако изменять его элементы нельзя:</p>
          <pre><code class="python">>>> a[0] = 11
    Traceback (most recent call last):
      File "&gt;stdin&lt;", line 1, in &gt;module&lt;
    TypeError: 'tuple' object does not support item assignment</code></pre>
          <p>Также у типа tuple нет методов для добавления и удаления элементов.</p>
          <p>Возникает резонный вопрос. Зачем в язык программирования был введен этот тип данных,
            по-сути представляющий собой неизменяемый список? Дело в том, что иногда надо
            защитить список от изменений. Преобразовать же кортеж в список, если это потребуется, как
            и выполнить обратную операцию легко с помощью встроенных в Python функций list() и
            tuple():</p>
          <pre><code class="python">>>> a = (10, 2.13, "square", 89, 'C')
    >>> b = [1, 2, 3]
    >>> c = list(a)
    >>> d = tuple(b)
    >>> c
    [10, 2.13, 'square', 89, 'C']
    >>> d
    (1, 2, 3)</code></pre>
          <p>Рассмотрим случай, когда уместно использовать кортежи. В Python изменяемые объекты
            передаются в функцию по ссылке. Это значит, что не создается копия объекта, а переменной4
            параметру присваивается ссылка на уже существующий объект. В итоге, если в теле функции
            объект изменяется, то эти изменения касаются глобального объекта.</p>
        </div> 
        <pre><code class="python">def addNum(seq, num):
        for i in range(len(seq)):
            seq[i] += num
        return seq
    
    origin = [3, 6, 2, 6]
    changed = addNum(origin, 3)
    
    print(origin)
    print(changed)</code></pre>
      </section>
      <section  class="text-manual__doc-section">
          <h2 class="text-manual__section-title">Основные команды</h2>

      </section>
      <section  class="text-manual__doc-section">
          <h2 class="text-manual__section-title">Нарезка строк</h2>

      </section>
    </div>          
  </div>
</template>
