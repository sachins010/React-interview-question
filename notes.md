1) what is React js?
    -It's javascript library used for building user interface and perticularly used for single page application(SPA).
    -Developed by facebook.
    -latest version 18.2.0 (11-01-2024).

2) what is component?
    -It's piece of code that we can reuse like a funtion.
    -powerfull than function.
    -class & functional components (types).

3) what is class component?
    -This component has ES6 class.
    -More Complex and more powerfull than functional component.
    -because it has lifecycle method and state.
    -No need to use hooks

4) what is functiona component?
    -It has no ES 6 class, it uses simple js function.
    -Simple and need hooks for performing states and lifecycle methods.
    
5) what is state?
    -its hold the information eg. name,data,object inside component as like variable. 
    -why dont use variable then -> when we update state component it'll rerender again but not in case of variable.
    -we can not use state outside the component.

6) what is props?
    -Share/Transfer the data between two or more components.
    -We can send the data parent to child, child to parent and in sibling component.
    -We can not change the props in receiving component
    (Note - when we use single data then we use state and when we have to use multiple data between components then we use props)

7) what are the hooks?
    -Functional component do not have state and lifecyle methods.
    -To use state and lifecycle methods we can import hooks in functional component.
    -we can not use Hooks inside functional component.

8) what is npm?(imp this)
    -It's Node Package Manager which help us to install Library in React JS.
    -if we build our project it'll minify our code that means our project size will reduce due to this our application run fast.

9) what is Package.json?
    -this will present on working directory and it'll carry the details of our application such as version,node package,description etc.

10)Can we use react js without npm?
    -Yes, we can use it like jquery also. but we can not able to install the library.won't minify code.

11)Can we connect react with the database Directly?
    -No. We need API for DB connection.

12)What is SPA(Single Page Application)?
    -Which means Application look like single page and No reload or refresh on jumping on other page and Link.

13)Write a simple component in React.js.
    -Functional component
        import React from 'react'

        function Sachin() {
            return (
                <div>
                    <h1>This is functional component</h1>
                </div>
            )
        }
        export default Sachin;
    
    -Class component
        import React from 'react';

        class Sachin extends React.Component {
            render() {
                return 
                    <div>
                        <h1>This is class component</h1>
                    </div>;
            }
        }

14)Can we make multiple components in the same file?
    -Yes.
    import React from 'react'

    function Sachin() {
        return (
         <div>
            <h1>This is functional component</h1>
             <Other/>// No need import if component is in same file
         </div>
        )
    }
    function Other() {
        return (
         <div>
            <h1>This is Other component</h1>
         </div>
        )
    }
    export default Sachin;

15)Can we make component inside component?
    -Yes.
    import React from 'react'

    function Sachin() {

        function Other() {
            return (
             <div>
                <h1>This is Other component inside</h1>
             </div>
            )
        }
        return (
             <div>
                <h1>This is functional component</h1>
                <Other/>
             </div>
            )
    }

    export default Sachin;

16) note:-
    - If we change the value of state full component get rerender.
    - If we change the value of variable full component will not get rerender.

17)When component get Re-render.
    -Whenever state or props change the component get Re-render.

18)What is high order components?
    -A function that takes component as a input parameter and return a component as a outpur parameter

19)What is the Controlled component?
    -A component that have a input form field and that field is controlled by react state.

20)What is the Un-Controlled component?
    -A component that has an input form field but these field are controlled by reference or DOM.

21)What is pure component?
    -A component which do not Re-render when the value of state and props has been updated.

22)Can we pass HTML content in props?
    -Yes.
    import React from 'react'

    function Sachin() {

        return (
         <div>
            <h1>This is functional component</h1>
            <Other><h1>This is other component using html data</h1></Other>
         </div>
        )
    }
    function Other(props) {
        return (
         <div>
            <h1>{props.children}</h1>
         </div>
        )
    }

    export default Sachin;

23)What is Dumb component?
    -Stateless component is calle dumb compnent.
    -A component we cant state.
