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
/* variable */
$desktop-width: 1024px;
$mobile-size: 200px;
$card-size: 400px;
$image-size: 400px;
$primary-blue: #08a0f7;

/* mixin */
@mixin mobile {
	@media (max-width: #{$desktop-width - 1px}) {
		@content;
	}
}

@mixin desktop {
	@media (min-width: #{$desktop-width}) {
		@content;
	}
}

@mixin cardResizer($arg...) {
	#flippable-carousel-flip-card {
		&-front {
			&-image {
				width: #{nth($arg, 1)};
				height: #{nth($arg, 1)};
			}
		}

		&-front,
		&-back {
			width: #{nth($arg, 2)};
			height: #{nth($arg, 2)};
		}
	}
}

/* custom style */
.neon-text {
	color: #fff;
	text-shadow: 0 0 7px $primary-blue, 0 0 10px $primary-blue, 0 0 21px $primary-blue,
		0 0 42px $primary-blue;
	animation: flicker 2s infinite alternate;
}

@keyframes flicker {
	0%,
	18%,
	22%,
	25%,
	53%,
	57%,
	100% {
		text-shadow: 0 0 4px $primary-blue, 0 0 11px $primary-blue, 0 0 19px $primary-blue,
			0 0 40px $primary-blue;
	}

	20%,
	24%,
	55% {
		text-shadow: none;
	}
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
