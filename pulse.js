   const box = document.querySelector('.glass-box');
    const borderPulse = document.querySelector('.border-pulse');

    const path = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: 0, y: 0 }
    ];

    const comet = document.createElement('div');
    comet.classList.add('comet');
    borderPulse.appendChild(comet);

    let trailSegments = [];
    const maxTrail = 10;
    let progress = 0;

    function animate() {
      const w = box.clientWidth;
      const h = box.clientHeight;
      const totalSegments = path.length - 1;
      const totalProgress = progress % totalSegments;
      const from = path[Math.floor(totalProgress)];
      const to = path[Math.floor(totalProgress) + 1];
      const localProgress = totalProgress % 1;

      const x = from.x * w + (to.x - from.x) * w * localProgress;
      const y = from.y * h + (to.y - from.y) * h * localProgress;

      comet.style.left = `${x}px`;
      comet.style.top = `${y}px`;

      const segment = document.createElement('div');
      segment.classList.add('trail-segment');
      segment.style.left = `${x}px`;
      segment.style.top = `${y}px`;
      segment.style.width = '15px';
      segment.style.height = '15px';
      segment.style.transform = 'translate(-50%, -50%)';
      borderPulse.appendChild(segment);
      trailSegments.push(segment);

      if (trailSegments.length > maxTrail) {
        const oldSegment = trailSegments.shift();
        oldSegment.remove();
      }

      progress += 0.01;
      if (progress >= totalSegments) progress = 0;
      requestAnimationFrame(animate);
    }

    animate();