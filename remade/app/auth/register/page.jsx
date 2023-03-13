"use client"

import classes from "../auth.module.css"
import { useEffect, useRef } from 'react'
import Matter from "matter-js"
import { signIn } from "next-auth/react"

export default function register() {
    const scene = useRef()
  const engine = useRef(Matter.Engine.create())
  // engine.current.enableSleeping = true



    const colours = ["#21A179", "#FF8811", "#A11692"]
    
  
  
  let number = 0
  let lastRan = Date.now()
  
  function addGeometry(e) {
    // console.log(number)
    let x = e.clientX;
    let y = e.clientY;

    if (Date.now() - 200 > lastRan) {
      lastRan = Date.now();
    } else {
      return 0
    }

   

    if (number < 3) {
      const ball = Matter.Bodies.trapezoid(
        x,
        y,
        40,
        40,
        1,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: colours[ number]
          }
        })
      Matter.World.add(engine.current.world, [ball])
    } else if (number < 6) {
      const ball = Matter.Bodies.trapezoid(
        x,
        y,
        80,
        80,
        1,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: colours[ number - 3]
          }
        })
      Matter.World.add(engine.current.world, [ball])
    } else if (number < 9) {
      const ball = Matter.Bodies.circle(
        x,
        y,
        40,
        40,
        1,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: colours[ number - 6]
          }
        })
      Matter.World.add(engine.current.world, [ball])
    } else if (number < 12) {
      const ball = Matter.Bodies.rectangle(
        x,
        y,
        80,
        80,
        1,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: colours[ number - 9]
          }
        })
      Matter.World.add(engine.current.world, [ball])
    } else if (number < 15) {
      const ball = Matter.Bodies.trapezoid(
        x,
        y,
        80,
        80,
        1,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: colours[ number - 12]
          }
        })
      Matter.World.add(engine.current.world, [ball])
    } else if (number < 18) {
      const ball = Matter.Bodies.rectangle(
        x,
        y,
        40,
        40,
        1,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: colours[ number - 15]
          }
        })
      Matter.World.add(engine.current.world, [ball])
    }

    if (number == 18) {
      number = 0
    } else {
      number+=1
    }
  

  }
    
    

    useEffect(() => {
        // mount
        const cw = document.body.clientWidth
      const ch = window.innerHeight
      console.log(document.body)
      
        const render = Matter.Render.create({
          element: scene.current,
          engine: engine.current,
          options: {
            width: cw,
            height: ch,
            wireframes: false,
            background: 'transparent'
          }
        })
          
        // boundaries
        Matter.World.add(engine.current.world, [
          Matter.Bodies.rectangle(cw, -2000, cw, 20, { isStatic: true }),
          Matter.Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
          Matter.Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
          Matter.Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
        ])
        

        
          
        // run the engine
        Matter.Runner.run(engine.current)
        Matter.Render.run(render)
      
        // unmount
        return () => {
          // destroy Matter
          Matter.Render.stop(render)
          Matter.World.clear(engine.current.world)
          Matter.Engine.clear(engine.current)
          render.canvas.remove()
          render.canvas = null
          render.context = null
          render.textures = {}
        }
      }, [])


    return <main className={classes.page}>
        <div className={classes.nav}>
            <div>Logo</div>
            <button onClick={() => signIn()}>Sign In</button>
        </div>

        <div className={classes.form}>
            <h1>Hi There</h1>
            <div>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="----------"/>
                <input type="password" placeholder="Confirm Password"/>
            </div>

            <div>
                <button>Continue</button>
                <div>Or</div>
                <button>Sign In With Google</button>

            </div>
        </div>

        <div className={classes.gravity} ref={scene} onMouseMove={(e) => addGeometry(e)}>
        </div>
    </main>
}