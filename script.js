const canv = document.querySelector('canvas'),
      ctx = canv.getContext('2d'),
      sqrt2 = Math.sqrt(2)
var attempts = 0

canv.width = 1154
canv.height = 772

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function drawTriangle(a, b, c) {
    ctx.beginPath()
    ctx.moveTo(a[0], a[1])
    ctx.lineTo(b[0], b[1])
    ctx.lineTo(c[0], c[1])

    ctx.closePath()
    ctx.fill()
}

async function drawTree(x, y, length, angle, type, step = 1) {
    if (attempts <= 8191)
        attempts++

    if (attempts < 8191) {
        await sleep(50)

        if (attempts < 127)
            ctx.fillStyle = '#824100'
        else
            ctx.fillStyle = '#008200'

        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.translate(x, y)
        ctx.rotate(angle * Math.PI / 180)
        ctx.fillRect(0, 0, length, length)
        ctx.setTransform(1, 0, 0, 1, 0, 0)

        if (attempts < 63)
            ctx.fillStyle = '#824100'
        else
            ctx.fillStyle = '#008200'

        if (type == 1) {
            drawTriangle(
                [x, y],
                [x + length / 2, y - length / 2],
                [x + length, y]
            )

            drawTree(
                x - Math.sqrt(0.25) * length,
                y - Math.sqrt(0.25) * length,
                length / sqrt2, -45, 2
            )

            drawTree(
                x + length, y - length,
                length / sqrt2, 45, 3, 0
            )
        }

        else if (type == 2) {
            drawTriangle(
                [x, y - length / sqrt2],
                [x + length / sqrt2, y - length / sqrt2],
                [x, y]
            )

            drawTree(
                x - Math.sqrt(0.5) * length,
                y - Math.sqrt(0.5) * length,
                length / sqrt2, 0, 4
            )

            drawTree(
                x, y - sqrt2 * length,
                length / sqrt2, 0, 1
            )
        }

        else if (type == 3) {
            if (step == 0) {
                drawTriangle(
                    [x, y],
                    [x + length / sqrt2, y],
                    [x + length / sqrt2, y + length / sqrt2]
                )

                drawTree(
                    x, y - Math.sqrt(0.5) * length,
                    length / sqrt2, 0, 1
                )

                drawTree(
                    x + Math.sqrt(0.5) * length, y,
                    length / sqrt2, 0, 5
                )
            }
            
            else if (step == 1) {
                drawTriangle(
                    [x + length / sqrt2, y - length / sqrt2],
                    [x + length / sqrt2 * 2, y - length / sqrt2],
                    [x + length / sqrt2 * 2, y]
                )

                drawTree(
                    x + Math.sqrt(0.5) * length,
                    y - sqrt2 * length,
                    length / sqrt2, 0, 1
                )

                drawTree(
                    x + sqrt2 * length,
                    y - Math.sqrt(0.5) * length,
                    length / sqrt2, 0, 5
                )
            }
        }

        else if (type == 4) {
            drawTriangle(
                [x - length / 2, y + length / 2],
                [x, y],
                [x, y + length]
            )

            drawTree(
                x - length, y,
                length / sqrt2, -45, 2
            )

            drawTree(
                x - Math.sqrt(0.25) * length,
                y + Math.sqrt(0.25) * length,
                length / sqrt2, 45, 6
            )
        }

        else if (type == 5) {
            drawTriangle(
                [x + length, y],
                [x + length * 1.5, y + length / 2],
                [x + length, y + length]
            )

            drawTree(
                x + length, y,
                length / sqrt2, -45, 3
            )

            drawTree(
                x + Math.sqrt(2.25) * length,
                y + Math.sqrt(0.25) * length,
                length / sqrt2, 45, 7
            )
        }

        else if (type == 6) {
            drawTriangle(
                [x - length / sqrt2, y + length / sqrt2],
                [x - length / sqrt2, y + length * sqrt2],
                [x, y + length * sqrt2]
            )

            drawTree(
                x - sqrt2 * length,
                y + Math.sqrt(0.5) * length,
                length / sqrt2, 0, 4
            )

            drawTree(
                x - Math.sqrt(0.5) * length,
                y + sqrt2 * length,
                length / sqrt2, 0, 8
            )
        }

        else if (type == 7) {
            drawTriangle(
                [x, y + length * sqrt2],
                [x + length / sqrt2, y + length / sqrt2],
                [x + length / sqrt2, y + length * sqrt2]
            )

            drawTree(
                x + Math.sqrt(0.5) * length,
                y + Math.sqrt(0.5) * length,
                length / sqrt2, 0, 5
            )

            drawTree(
                x,
                y + sqrt2 * length,
                length / sqrt2, 0, 8
            )
        }

        else if (type == 8) {
            drawTriangle(
                [x, y + length],
                [x + length, y + length],
                [x + length / 2, y + length * 1.5]
            )

            drawTree(
                x, y + length,
                length / sqrt2, 45, 6
            )

            drawTree(
                x + length,
                y + length,
                length / sqrt2, 45, 7
            )
        }
    }
}

drawTree(480, 578, 194, 0, 1)