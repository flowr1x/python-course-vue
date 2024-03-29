<template>
  <div class="manual__text text-manual">
    <div class="text-manual__header">
      <h1 class="text-manual__title">Тема 10</h1>
      <div class="text-manual__subtitle">Локальные и глобальные переменные</div>
    </div>
    <div class="text-manual__body">
      <section class="text-manual__doc-section">
        <h2 id="title1" class="text-manual__section-title">Область видимости</h2>
        <div class="text-manual__section-block">
          <p>В программировании особое внимание уделяется концепции о локальных и глобальных
              переменных, а также связанное с ними представление об областях видимости.
              Соответственно, локальные переменные видны только в локальной области видимости,
              которой может выступать отдельно взятая функция. Глобальные переменные видны во всей
              программе. "Видны" – значит, известны, доступны. К ним можно обратиться по имени и
              получить связанное с ними значение.</p>
          <p>К глобальной переменной можно обратиться из локальной области видимости. К локальной
              переменной нельзя обратиться из глобальной области видимости, потому что локальная
              переменная существует только в момент выполнения тела функции. При выходе из нее,
              локальные переменные исчезают. Компьютерная память, которая под них отводилась, 
              освобождается. Когда функция будет снова вызвана, локальные переменные будут созданы
              заново.</p>
          <p>Вернемся к нашей программе из прошлого урока, немного упростив ее для удобства:</p>
          <pre><code class="python">def rectangle():
 a = float(input("Ширина: "))
 b = float(input("Высота: "))
 print("Площадь: %.2f" % (a*b))

def triangle():
 a = float(input("Основание: "))
 h = float(input("Высота: "))
 print("Площадь: %.2f" % (0.5 * a * h))

figure = input("1-прямоугольник, 2-треугольник: ")
if figure == '1':
 rectangle()
elif figure == '2':
 triangle()</code></pre>
            <p>Сколько здесь переменных? Какие из них являются глобальными, а какие – локальными?
                Здесь пять переменных. Глобальной является только figure. Переменные a и b из функции
                rectangle(), а также a и h из triangle() – локальные. При этом локальные переменные с
                одним и тем же идентификатором a, но объявленные в разных функциях, – разные
                переменные.</p>
            <p>Следует отметить, что идентификаторы rectangle и triangle, хотя и не являются именами
                переменных, а представляют собой имена функций, также имеют область видимости. В
                данном случае она глобальная, так как функции объявлены непосредственно в основной
                ветке программы.</p>
            <p>В приведенной программе к глобальной области видимости относятся заголовки объявлений
                функций, объявление и присваивание переменной figure, конструкция условного оператора.</p>
            <p>К локальной области относятся тела функций. Если, находясь в глобальной области
                видимости, мы попытаемся обратиться к локальной переменной, то возникнет ошибка:</p>
            <pre><code class="python">…
elif figure == '2':
 triangle()

print(a)</code></pre>
            <p>Пример выполнения:</p>
            <pre><code class="python">1-прямоугольник, 2-треугольник: 2
Основание: 4
Высота: 5
Площадь: 10.00
 Traceback (most recent call last):
 File "test.py", line 17, in &lt;module&gt;
  print(a)
NameError: name 'a' is not defined</code></pre>
            <p>Однако мы можем обращаться из функций к глобальным переменным:</p>
            <pre><code class="python">def rectangle():
 a = float(input("Ширина %s: " % figure))
 b = float(input("Высота %s: " % figure))
 print("Площадь: %.2f" % (a*b))

def triangle():
 a = float(input("Основание %s: " % figure))
 h = float(input("Высота %s: " % figure))
 print("Площадь: %.2f" % (0.5 * a * h))

figure = input("1-прямоугольник, 2-треугольник: ")
if figure == '1':
 rectangle()
elif figure == '2':
 triangle()</code></pre>
            <p>Пример выполнения:</p>
            <pre><code class="python">1-прямоугольник, 2-треугольник: 1
Ширина 1: 6.35
Высота 1: 2.75
Площадь: 17.46</code></pre>
            <p>В данном случае из тел функций происходит обращение к имени figure, которое, из-за того,
                что было объявлено в глобальной области видимости, видимо во всей программе.</p>
            <p>Наши функции не совсем идеальны. Они должны вычислять площади фигур, но выводить
                результат на экран им не следовало бы. Вполне вероятна ситуация, когда результат нужен для
                внутренних нужд программы, для каких-то дальнейших вычислений, а выводить ли его на
                экран – вопрос второстепенный.</p>
            <p>Если функции не будут выводить, а только вычислять результат, то его надо где-то сохранить
                для дальнейшего использования. Для этого подошли бы глобальные переменные. В них
                можно записать результат. Напишем программу вот так:</p>
            <pre><code class="python">result = 0
    
def rectangle():
 a = float(input("Ширина: "))
 b = float(input("Высота: "))
 result = a*b

def triangle():
 a = float(input("Основание: "))
 h = float(input("Высота: "))
 result = 0.5 * a * h

figure = input("1-прямоугольник, 2-треугольник: ")
if figure == '1':
 rectangle()
elif figure == '2':
 triangle()

print("Площадь: %.2f" % result)</code></pre>
              <p>Итак, мы ввели в программу глобальную переменную result и инициировали ее нулем. В
                  функциях ей присваивается результат вычислений. В конце программы ее значение
                  выводится на экран. Мы ожидаем, что программа будет прекрасно работать. Однако…</p>
              <pre><code class="python">1-прямоугольник, 2-треугольник: 2
Основание: 6
Высота: 4.5
Площадь: 0.00</code></pre>
              <p>… что-то пошло не так.
                  Дело в том, что в Python присвоение значения переменной совмещено с ее объявлением. (Во
                  многих других языках это не так.) Поэтому, когда имя result впервые упоминается в
                  локальной области видимости, и при этом происходит присваивание ей значения, то
                  создается локальная переменная result. Это другая переменная, никак не связанная с
                  глобальной result.</p>
              <p>Когда функция завершает свою работу, то значение локальной result теряется, а глобальная
                  не была изменена.</p>
              <p>Когда мы вызывали внутри функции переменную figure, то ничего ей не присваивали.
                  Наоборот, мы запрашивали ее значение. Интерпретатор Питона искал ее значение сначала в
                  локальной области видимости и не находил. После этого шел в глобальную и находил.
                  В случае с result он ничего не ищет. Он выполняет вычисления справа от знака
                  присваивания, создает локальную переменную result, связывает ее с полученным
                  значением.</p>
              <p>На самом деле можно принудительно обратиться к глобальной переменной. Для этого
                  существует команда global:</p>
              <pre><code class="python">result = 0
    
def rectangle():
 a = float(input("Ширина: "))
 b = float(input("Высота: "))
 global result
 result = a*b

def triangle():
 a = float(input("Основание: "))
 h = float(input("Высота: "))
 global result
 result = 0.5 * a * h

figure = input("1-прямоугольник, 2-треугольник: ")
if figure == '1':
 rectangle()
elif figure == '2':
 triangle()
   
print("Площадь: %.2f" % result)</code></pre>
                <p>В таком варианте программа будет работать правильно.</p>
                <p>Однако менять значения глобальных переменных в теле функции – плохая практика. В
                    больших программах программисту трудно отследить, где, какая функция и почему изменила
                    их значение. Программист смотрит на исходное значение глобальной переменной и может
                    подумать, что оно остается таким же. Сложно заметить, что какая-то функция поменяла его.
                    Подобное ведет к логическим ошибкам.</p>
                <p>Чтобы избавиться от необходимости использовать глобальные переменные, для функций
                    существует возможность возврата результата своей работы в основную ветку программы. И
                    уже это полученное из функции значение можно присвоить глобальной переменной в
                    глобальной области видимости. Это делает программу более понятной.</p>
                <p>Как функция принимает и возвращает данные, будет рассмотрено в следующих уроках.</p>
        </div> 
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "theory_10"
}
</script>
