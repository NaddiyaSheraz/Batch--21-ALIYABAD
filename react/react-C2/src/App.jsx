// import Card from './components/Card';

// function App(){
//   return (
//     <Card />
//   );
// };

// export default App;


///////////Props
// import Card from './components/Card';

// function App(){
//   return (
//     <Card Stnames="Ali Hamdan" StFnames="AbC" description="Learn React and build modern websites
//                     with reusable components."/>
//   );
// };

// export default App;

///////////props with destructing
// import Card from './components/Card';

// function App(){
//   return (
//     <div>
//       <Card Stnames="Ali Hamdan" StFnames="AbC" description="Learn React and build modern websites
//                     with reusable components."/>
//     <Card Stnames="Misha" StFnames="AbC" description="Learn React and build modern websites
//                     with reusable components."/>
//     <Card Stnames="Naveed" StFnames="AbC" description="Learn React and build modern websites
//                     with reusable components."/>
//     <Card Stnames="Qurat" StFnames="AbC" description="Learn React and build modern websites
//                     with reusable components."/>
//     </div>
//   );
// };

// export default App;


///////////////Fragments
import Card from './components/Card';

function App() {
    return (
        <>
            <Card Stnames="Ali Hamdan" StFnames="AbC" description="Learn React and build modern websites
                    with reusable components."/>
            <Card Stnames="Misha" StFnames="AbC" description="Learn React and build modern websites
                    with reusable components."/>
            <Card Stnames="Naveed" StFnames="AbC" description="Learn React and build modern websites
                    with reusable components."/>
            <Card Stnames="Qurat" StFnames="AbC" description="Learn React and build modern websites
                    with reusable components."/>
        </>
    );
};

export default App;