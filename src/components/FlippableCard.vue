<template>
	<div
		@click="slideToSelectedCard"
		id="flippable-carousel-flip-card"
		:class="`absolute ${card.selectedStatus[0]} cursor-pointer transition-all duration-1000`"
	>
		<div
			id="flippable-carousel-flip-card-front"
			class="bg-gradient-to-r to-gray-900 from-blue-900 overflow-hidden shadow-2xl absolute transition-all duration-1000"
		>
			<figure
				id="flippable-carousel-flip-card-front-image"
				class="overflow-hidden transition-all duration-1000"
			>
				<img
					:src="card.frontImage"
					alt="flippable-carousel-flip-card-front-image"
					class="w-full h-full"
				/>
			</figure>
		</div>
		<div
			id="flippable-carousel-flip-card-back"
			class="card-flip-back bg-gradient-to-r from-blue-900 to-gray-900 overflow-hidden shadow-2xl transition-all duration-1000"
		>
			<div class="h-full">
				<div class="h-full flex justify-center items-center">
					<div
						id="flippable-carousel-flip-card-back-index"
						class="text-2xl lg:text-7xl font-bold neon-text"
					>
						{{ `0${cardIndex + 1} FlipCard` }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { FlippableCardInfo } from '@/typings';

export default Vue.extend({
	name: 'FlippableCard',

	props: {
		card: {
			type: Object as PropType<FlippableCardInfo>,
			default: null,
		},

		cardIndex: {
			type: Number,
			default: 0,
		},

		slideToSelectedCard: {
			type: Function as PropType<() => void>,
			default: null,
		},
	},
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

/* custom style */
.neon-text {
	color: #fff;
	text-shadow: 0 0 7px $primary-blue, 0 0 10px $primary-blue, 0 0 21px $primary-blue,
		0 0 42px $primary-blue;
	animation: flicker 2s infinite alternate;
}

.card-flip {
	&-front {
		transform: rotateY(180deg);
	}

	&-back {
		transform: rotateY(-180deg);
	}
}

/* styles */
#flippable-carousel-flip-card {
	perspective: 1000px;
	@apply opacity-100;

	&-front {
		&-image {
			@apply w-card-mobile lg:w-card-web h-card-mobile lg:h-card-web;
		}
	}

	&-back {
		&-index {
			font-family: 'Vibur', cursive;
		}
	}

	&-front,
	&-back {
		@apply w-card-mobile h-card-mobile lg:w-card-web lg:h-card-web;

		backface-visibility: hidden;
		transform-style: preserve-3d;
	}

	&.selected {
		@apply left-1/2 transform translate-y-0 -translate-x-1/2 z-20;
	}

	&.prev {
		@apply left-1/3 transform translate-y-0 -translate-x-full;
	}

	&.next {
		@apply left-2/3 transform translate-y-0 -translate-x-0;
	}

	&.prev,
	&.next {
		@apply z-10;
		@include mobile {
			@include cardResizer($mobile-size * 0.8, $mobile-size * 0.8);
		}
		@include desktop {
			@include cardResizer($image-size * 0.8, $card-size * 0.8);
		}
	}

	&.prev-second {
		@apply left-1/3 transform translate-y-0 -translate-x-full;
	}

	&.next-second {
		@apply left-2/3 transform translate-y-0 -translate-x-0;
	}

	&.prev-second,
	&.next-second {
		@apply opacity-0 z-0;
		@include mobile {
			@include cardResizer($mobile-size * 0.6, $mobile-size * 0.6);
		}
		@include desktop {
			@include cardResizer($image-size * 0.6, $card-size * 0.6);
		}
	}
}
</style>
