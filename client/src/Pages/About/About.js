import s from './About.module.sass';
import { Layout, Divider } from 'antd';
const { Content } = Layout;

export default function About() {
    return (
        <Content style={{ padding: '0 50px' }}>
            <div className={s.content_container}>
                <h1>Система, основанная на знаниях, для определения стоимости квартиры в городе Владивосток</h1>
                <Divider/>
                <p>Система, основанная на знаниях – это компьютерная программа, которая объединяет и использует базу знаний для решения сложных задач.</p>
                <p>Одним из решаемых системой, основанной на знаниях, классов задач является задача классификации. Задача состоит в том, чтобы найти класс, к которому относится выбранный экземпляр, по некоторым известным признакам (свойствам) этого объекта.</p>
                <p>В рамках данной курсовой работы рассматривается задача классификации квартир города Владивосток по их цене. Купля-продажа недвижимости сейчас является актуальной темой для многих людей, особенно в быстро растущих и развивающихся городах таких как Владивосток. Но распространены ситуации, когда продавец намерено завышает цену недвижимости, с целью получения большей выгоды, либо наоборот из-за отсутствия достаточных знаний рынка недвижимости продавец занижает стоимость, вследствие чего теряет деньги. Поэтому можно сделать вывод, что подобная система может быть полезна как продавцам, так и покупателем недвижимости.</p>
            </div>
        </Content>
    );
}