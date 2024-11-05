class ThreeDemo {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // Setup camera
        this.camera.position.z = 5;

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        this.scene.add(pointLight);

        // Create neural network visualization
        this.createNeuralNetwork();

        // Start animation loop
        this.animate();

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize(), false);
    }

    createNeuralNetwork() {
        const geometry = new THREE.SphereGeometry(0.1, 32, 32);
        const material = new THREE.MeshPhongMaterial({ color: 0x6c63ff });

        for (let i = 0; i < 50; i++) {
            const neuron = new THREE.Mesh(geometry, material);
            neuron.position.set(
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 5
            );
            this.scene.add(neuron);
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Rotate scene
        this.scene.rotation.y += 0.001;
        this.scene.rotation.x += 0.0005;

        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }
}

// Initialize demos
document.addEventListener('DOMContentLoaded', () => {
    new ThreeDemo('hero-canvas');
    new ThreeDemo('demo-canvas');
});
