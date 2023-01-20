import Title from './Title'

export default function Help() {
    return (
        <div class="flex-grow flex flex-col items-center aspect-w-16 aspect-h-9 space-y-32">
            <Title />
            <iframe
                src="https://player.vimeo.com/video/791202611?h=4310cdae62"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    )
}
