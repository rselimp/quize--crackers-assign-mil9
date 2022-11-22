import React from 'react';
//6.blog components 3 questions and answer
const Blog = () => {
    return (
        <div>
            <h2 className='text-3xl'>1.What is the purpose of react router?</h2>
            <p className='text-xl'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            <h2 className='text-3xl'>2.How doues context api work?</h2>
            <p className='text-xl'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page    
            </p>
            <h2 className='text-3xl'>3. Hooks useref</h2>
            <p className='text-xl'>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
        </div>
    );
};

export default Blog;