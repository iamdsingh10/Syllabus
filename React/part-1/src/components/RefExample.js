 import React, {useState, useRef } from "react";

// export default function RefExample(){

//     const containerRef = useRef(null);
//     const titleRef= useRef(null);
//     const [title,setTitle] = useState('Title')

//     return <>
//     <div className="fixed-height-div"  ref={containerRef}>
//         {/* <h2 ref={titleRef}>{title}</h2>
//         <button onClick={()=> {titleRef.current.innerText='New Title'}}>change Title</button> */}
//         <h2>{title}</h2>
//         <button onClick={()=>setTitle('New Title')}>Change Title</button>  {/* This is good because this will not directly update actual DOM*/} 
// <div>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor dolor sit amet feugiat fermentum. Proin hendrerit ornare orci, a sollicitudin velit vulputate ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel malesuada diam. Maecenas id felis vel libero pharetra sollicitudin eu efficitur odio. Suspendisse euismod mattis ipsum eu lobortis. Sed rhoncus, quam ut varius pretium, nisi eros ornare ipsum, volutpat tempus nisi urna in mi. Pellentesque vulputate lorem lorem, in vulputate risus eleifend venenatis. Morbi ac turpis sed erat ornare pulvinar vel in justo. Nam fringilla massa ac libero lobortis, at sollicitudin eros tempus. Sed in mi lectus. Etiam a ex luctus, fermentum felis ac, dignissim purus. In venenatis odio eget nunc maximus, id bibendum justo ultricies. Donec pellentesque at dolor ac gravida. Vestibulum nec magna ac turpis molestie malesuada.</p>
//     <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque sit amet nisl at lacus blandit egestas a eget quam. Curabitur accumsan dolor at vestibulum tincidunt. Sed commodo tempor massa quis lacinia. Vestibulum dictum ante turpis, at venenatis massa varius non. Aliquam sit amet turpis a tellus volutpat accumsan. Suspendisse potenti.</p>
//     <p>Curabitur malesuada et nunc ac semper. In feugiat enim arcu, convallis egestas dolor efficitur non. Suspendisse scelerisque neque tincidunt, eleifend arcu non, mattis leo. Donec finibus eget tellus eget faucibus. Suspendisse elit mi, tristique id laoreet ac, varius vel tellus. Duis quam lorem, condimentum a erat sed, facilisis accumsan quam. Proin tincidunt euismod porta. Suspendisse luctus gravida velit, sed placerat massa tempus eu. Nunc vitae interdum lectus. Sed et scelerisque dui. Cras ut magna ac ligula sollicitudin suscipit a at augue. Praesent non ornare turpis. Suspendisse potenti. Phasellus iaculis eros dapibus augue aliquet lacinia. In dignissim, ligula eget pretium facilisis, sem nibh hendrerit odio, eget lobortis tellus magna vel velit. Fusce ullamcorper convallis metus, sit amet gravida magna.</p>
//     <p>Fusce ornare lacus non consectetur semper. Pellentesque nec rutrum felis. Maecenas molestie non massa in aliquet. Morbi in sapien at mauris auctor molestie quis ac mauris. Nam sagittis, diam at accumsan volutpat, velit dui vestibulum elit, vitae mollis neque enim vitae sem. Mauris porttitor est vitae diam laoreet, vitae vestibulum augue vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam varius, elit vitae scelerisque porta, elit sapien blandit massa, quis gravida odio est at enim. Cras sit amet aliquet arcu. Suspendisse dignissim viverra felis, ut imperdiet ex iaculis eget. Donec sed elit ornare, gravida arcu in, sollicitudin quam. In eget felis fermentum, cursus erat at, pharetra ipsum. Etiam laoreet quis ipsum id finibus. Proin mattis orci ligula, in vehicula risus tempor non. Ut aliquam ligula lectus. Vestibulum ornare magna sit amet ultricies varius.</p>
//     <p>Sed viverra gravida ipsum ut gravida. Nullam mollis facilisis tortor. Etiam laoreet nunc vulputate venenatis interdum. Fusce pulvinar malesuada quam, quis venenatis dui volutpat vitae. Vestibulum urna enim, varius at nunc sed, ultrices interdum velit. Sed posuere, velit vel vulputate volutpat, tellus mauris malesuada est, nec viverra diam dui ut leo. Nam id mattis nisl. Sed vulputate arcu non leo sagittis, eget facilisis ipsum pellentesque. Pellentesque interdum facilisis arcu, quis bibendum orci suscipit quis. Integer sit amet tellus ante. Ut neque augue, blandit id dolor ac, tincidunt hendrerit nisi. In ut nisi ac sapien molestie imperdiet ut vitae ante.</p>
//     <p>Sed viverra gravida ipsum ut gravida. Nullam mollis facilisis tortor. Etiam laoreet nunc vulputate venenatis interdum. Fusce pulvinar malesuada quam, quis venenatis dui volutpat vitae. Vestibulum urna enim, varius at nunc sed, ultrices interdum velit. Sed posuere, velit vel vulputate volutpat, tellus mauris malesuada est, nec viverra diam dui ut leo. Nam id mattis nisl. Sed vulputate arcu non leo sagittis, eget facilisis ipsum pellentesque. Pellentesque interdum facilisis arcu, quis bibendum orci suscipit quis. Integer sit amet tellus ante. Ut neque augue, blandit id dolor ac, tincidunt hendrerit nisi. In ut nisi ac sapien molestie imperdiet ut vitae ante.</p>
//     <p>Cras iaculis arcu nec dui semper scelerisque. Aliquam erat volutpat. Suspendisse faucibus diam non posuere consequat. Vivamus dictum ante quis neque faucibus fringilla. Vestibulum mauris nibh, feugiat sit amet augue id, aliquet ultrices eros. Phasellus tincidunt lectus sit amet ipsum elementum, vel malesuada augue venenatis. Ut porttitor vulputate viverra. Quisque ex lectus, cursus vel dolor vitae, molestie feugiat urna. Maecenas et tortor semper, elementum risus at, tempus purus. Nunc malesuada turpis eget lectus suscipit blandit. Sed rhoncus nisl placerat lectus consequat, ac ultricies turpis scelerisque. Aenean vel viverra ligula. Ut diam diam, feugiat sed ornare ac, pharetra vitae orci. In nec ante ultrices, malesuada ex et, sodales quam. Aenean orci lectus, efficitur eget lorem at, rhoncus consectetur diam.</p>
// </div>
//     {/* <button   onClick={()=>{document.querySelector('.fixed-height-div').scrollTo({top:0})}}>Scroll to Top</button> */}

//     <button  onClick={()=>{containerRef.current.scrollTo({top:0})}}>Scroll To Top</button>
//     </div>
//     </>
// } 

export default function RefExample() {
    const containerRef = useRef(null);
    return<>
<FixedHeightDiv ref={containerRef} name='Deepak' city='bangalore'/>
<ScrollerButton onClick={()=>{containerRef.current.scrollTo({top:0})}}/>
    
    </>
}

const FixedHeightDiv= React.forwardRef(({name, city},ref)=> {
    return <><div className="fixed-height-div"  ref={ref}>
       
        <h2>Title</h2>
        <h4>my name is {name} and I live in {city}</h4>
        
<div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor dolor sit amet feugiat fermentum. Proin hendrerit ornare orci, a sollicitudin velit vulputate ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel malesuada diam. Maecenas id felis vel libero pharetra sollicitudin eu efficitur odio. Suspendisse euismod mattis ipsum eu lobortis. Sed rhoncus, quam ut varius pretium, nisi eros ornare ipsum, volutpat tempus nisi urna in mi. Pellentesque vulputate lorem lorem, in vulputate risus eleifend venenatis. Morbi ac turpis sed erat ornare pulvinar vel in justo. Nam fringilla massa ac libero lobortis, at sollicitudin eros tempus. Sed in mi lectus. Etiam a ex luctus, fermentum felis ac, dignissim purus. In venenatis odio eget nunc maximus, id bibendum justo ultricies. Donec pellentesque at dolor ac gravida. Vestibulum nec magna ac turpis molestie malesuada.</p>
    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque sit amet nisl at lacus blandit egestas a eget quam. Curabitur accumsan dolor at vestibulum tincidunt. Sed commodo tempor massa quis lacinia. Vestibulum dictum ante turpis, at venenatis massa varius non. Aliquam sit amet turpis a tellus volutpat accumsan. Suspendisse potenti.</p>
    <p>Curabitur malesuada et nunc ac semper. In feugiat enim arcu, convallis egestas dolor efficitur non. Suspendisse scelerisque neque tincidunt, eleifend arcu non, mattis leo. Donec finibus eget tellus eget faucibus. Suspendisse elit mi, tristique id laoreet ac, varius vel tellus. Duis quam lorem, condimentum a erat sed, facilisis accumsan quam. Proin tincidunt euismod porta. Suspendisse luctus gravida velit, sed placerat massa tempus eu. Nunc vitae interdum lectus. Sed et scelerisque dui. Cras ut magna ac ligula sollicitudin suscipit a at augue. Praesent non ornare turpis. Suspendisse potenti. Phasellus iaculis eros dapibus augue aliquet lacinia. In dignissim, ligula eget pretium facilisis, sem nibh hendrerit odio, eget lobortis tellus magna vel velit. Fusce ullamcorper convallis metus, sit amet gravida magna.</p>
    <p>Fusce ornare lacus non consectetur semper. Pellentesque nec rutrum felis. Maecenas molestie non massa in aliquet. Morbi in sapien at mauris auctor molestie quis ac mauris. Nam sagittis, diam at accumsan volutpat, velit dui vestibulum elit, vitae mollis neque enim vitae sem. Mauris porttitor est vitae diam laoreet, vitae vestibulum augue vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam varius, elit vitae scelerisque porta, elit sapien blandit massa, quis gravida odio est at enim. Cras sit amet aliquet arcu. Suspendisse dignissim viverra felis, ut imperdiet ex iaculis eget. Donec sed elit ornare, gravida arcu in, sollicitudin quam. In eget felis fermentum, cursus erat at, pharetra ipsum. Etiam laoreet quis ipsum id finibus. Proin mattis orci ligula, in vehicula risus tempor non. Ut aliquam ligula lectus. Vestibulum ornare magna sit amet ultricies varius.</p>
    <p>Sed viverra gravida ipsum ut gravida. Nullam mollis facilisis tortor. Etiam laoreet nunc vulputate venenatis interdum. Fusce pulvinar malesuada quam, quis venenatis dui volutpat vitae. Vestibulum urna enim, varius at nunc sed, ultrices interdum velit. Sed posuere, velit vel vulputate volutpat, tellus mauris malesuada est, nec viverra diam dui ut leo. Nam id mattis nisl. Sed vulputate arcu non leo sagittis, eget facilisis ipsum pellentesque. Pellentesque interdum facilisis arcu, quis bibendum orci suscipit quis. Integer sit amet tellus ante. Ut neque augue, blandit id dolor ac, tincidunt hendrerit nisi. In ut nisi ac sapien molestie imperdiet ut vitae ante.</p>
    <p>Sed viverra gravida ipsum ut gravida. Nullam mollis facilisis tortor. Etiam laoreet nunc vulputate venenatis interdum. Fusce pulvinar malesuada quam, quis venenatis dui volutpat vitae. Vestibulum urna enim, varius at nunc sed, ultrices interdum velit. Sed posuere, velit vel vulputate volutpat, tellus mauris malesuada est, nec viverra diam dui ut leo. Nam id mattis nisl. Sed vulputate arcu non leo sagittis, eget facilisis ipsum pellentesque. Pellentesque interdum facilisis arcu, quis bibendum orci suscipit quis. Integer sit amet tellus ante. Ut neque augue, blandit id dolor ac, tincidunt hendrerit nisi. In ut nisi ac sapien molestie imperdiet ut vitae ante.</p>
    <p>Cras iaculis arcu nec dui semper scelerisque. Aliquam erat volutpat. Suspendisse faucibus diam non posuere consequat. Vivamus dictum ante quis neque faucibus fringilla. Vestibulum mauris nibh, feugiat sit amet augue id, aliquet ultrices eros. Phasellus tincidunt lectus sit amet ipsum elementum, vel malesuada augue venenatis. Ut porttitor vulputate viverra. Quisque ex lectus, cursus vel dolor vitae, molestie feugiat urna. Maecenas et tortor semper, elementum risus at, tempus purus. Nunc malesuada turpis eget lectus suscipit blandit. Sed rhoncus nisl placerat lectus consequat, ac ultricies turpis scelerisque. Aenean vel viverra ligula. Ut diam diam, feugiat sed ornare ac, pharetra vitae orci. In nec ante ultrices, malesuada ex et, sodales quam. Aenean orci lectus, efficitur eget lorem at, rhoncus consectetur diam.</p>
</div>
</div>
</>
    })

    function ScrollerButton({onClick}) {
        return <>
        <button onClick={onClick}>Scroll To Top</button>
        </>
    }